// @flow
import * as React from 'react';

const scaleNames = {
  c: '摄氏度',
  f: '华氏度',
};

function toCelsius(f: number): number {
  return (f - 32) * 5 / 9;
}

function toFahrenheit(c: number):number {
  return c * 9 / 5 + 32;
}

function BoilingVerdict(props: {celsius: number}): React.Node {
  return props.celsius >= 100 ? <p>水会烧开</p> : <p>水不会烧开</p>;
}

type TemperatureProps = {
  scale:string,
  onTemperatureChange: Function,
  temperature: number,
}

class TemperatureInput extends React.Component<TemperatureProps> {
  componentDidMount() {
    console.log(`${this.props.scale}: `, this.refTest);
  }

  refTest: ?React.ElementRef<'input'> = null

  handleChange = (e: any) => {
    this.props.onTemperatureChange(e.currentTarget.value);
  }

  render(): React.Node {
    return (
      <fieldset>
        <legend>输入一个{scaleNames[this.props.scale]}</legend>
        <input
          type="number"
          value={this.props.temperature}
          onChange={this.handleChange}
          ref={(el) => { this.refTest = el; }}
        />
      </fieldset>
    );
  }
}

class Calculator extends React.Component<{}, { temperature: number, scale: 'c'|'f' }> {
  state = {
    temperature: 0,
    scale: 'f',
  }

  changeCtoF = (temperature: number) => {
    this.setState({ temperature, scale: 'f' });
  }

  changeFtoC = (temperature: number) => {
    this.setState({ temperature, scale: 'c' });
  }

  render(): React.Node {
    const { scale, temperature } = this.state;
    const celsius = scale === 'c' ? toCelsius(parseFloat(temperature)) : temperature;
    const fahrenheit = scale === 'f' ? toFahrenheit(parseFloat(temperature)) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.changeCtoF}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.changeFtoC}
        />

        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

export default function Container(): React.Node {
  return <Calculator />;
}
