// @flow
import React from 'react';

type Props = {
  name: string
}

export default function Container(props: Props) {
  return <p>{ props.name }</p>;
}
