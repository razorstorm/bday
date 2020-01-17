import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Bubbles.css';

class Bubbles extends Component {
  render() {
    return (
      <div className="bubble" style={{
        left: this.props.x,
        top: this.props.y,
        transform: 'scale(' + this.props.size + ')'
      }}>
      </div>
    );
  }
}

export default Bubbles;
