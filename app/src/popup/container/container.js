// @flow
import React from 'react';

type Props = {
  name: string
}

export default class Container extends React.Component<Props> {
  init() {
    this.state.test = 1;
  }

  render() {
    return <p>{ this.props.name }</p>;
  }
}
