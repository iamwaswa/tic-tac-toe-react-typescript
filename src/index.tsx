import * as React from 'react';
import * as ReactDOM from "react-dom";
import Game from "./components/Game";

document.body.style.margin = `0`;
document.body.style.padding = `1em`;
document.body.style.fontSize = `14px`;
document.body.style.fontWeight = `normal` as `normal`;
document.body.style.fontFamily = `Century Gothic, Futura, sans-serif`;
document.body.style.minWidth = `150px`;

ReactDOM.render(
  <Game />,
  document.getElementById('root') as HTMLElement
);