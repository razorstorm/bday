import React, { Component } from 'react';
import Dimensions from 'react-dimensions';

import './Projects.css';

class Square extends Component {
  render (){
    // const squareSize = this.props.containerWidth * 0.8;
    const squareSize = '300px';
    // const left = this.props.containerWidth - 150;
    return (
      <div>
        <a href = {this.props.linkSrc} className={this.props.className}
            style={{
              width: squareSize,
              height: squareSize,
              // left: this.props.containerWidth * 0.1,
              backgroundImage:"url(" + this.props.imgSrc + ")"
            }}>
            <div className="projectName">{this.props.projName}</div>
        </a>
        {this.props.children}
        </div>
    );
  }
}

export default Dimensions()(Square);
