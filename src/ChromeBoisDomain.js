import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.clientX;
      let y = event.clientY;
      drawChromeBoiAtCoords(x,y);
  }

  mouseClick = () => {
  toggleCycling();
}

keyDown = (event) => {
let e = event.key;
if (e === 'a'){
  resize('+');
}else if (e  ==='s'){
  resize('-');
}
}

render() {
  return (
    <canvas
      onMouseMove={this.handleMouseMove}
      onClick={this.mouseClick}
      onKeyDown={this.keyDown}
      width='900'
      height='600'
      tabIndex="0">
    </canvas>
  )
}
}
