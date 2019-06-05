import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './container/container';

export default function() {
  ReactDOM.render(
    <Popup />,
    document.getElementById('popup')
  );
}
