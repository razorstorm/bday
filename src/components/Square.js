import React, { Component } from 'react';
import Dimensions from 'react-dimensions';

import './Projects.css';

class Square extends Component {
  render() {
    const squareSize = '300px';
    return (
      <div className="squareContainer">
        <div className="square flip-card">
          <a href={this.props.linkSrc} className={this.props.className}
            style={{
              width: '20rem',
              height: '20rem'
            }}>
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-face">
                <div className="projectImg" style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: "url(" + this.props.imgSrc + ")"
                }} />
              </div>
              <div class="flip-card-back flip-card-face">
                <h4>{this.props.projName}</h4>
                {this.props.children}
              </div>
            </div>
          </a>
        </div>
        <div className="projectName">{this.props.projName}</div>
      </div>
    );
  }
}

export default Dimensions()(Square);

