import './index.scss';
import Popup from './popup';
import Content from './content';

function Init() {
  switch (window.extensionEnv) {
    case 'popup':
      Popup();
      break;
    default:
      Content();
  }
}

Init();
