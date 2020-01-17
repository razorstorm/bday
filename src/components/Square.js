import React, { Component } from 'react';
import Dimensions from 'react-dimensions';

import './Projects.css';

class Square extends Component {
  render() {
    const squareSize = '300px';
    return (
      <div class="square">
        <a href={this.props.linkSrc} className={this.props.className}
          style={{
            width: squareSize,
            height: squareSize,
            backgroundImage: "url(" + this.props.imgSrc + ")"
          }}>
          <div className="projectName">{this.props.projName}</div>
        </a>
        {this.props.children}
      </div>
    );
  }
}

export default Dimensions()(Square);
