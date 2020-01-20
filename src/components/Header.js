import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className={this.props.className + " intro-header"}>
        <div className="headerBG" style={{
          background: `url("${process.env.PUBLIC_URL + '/images/header.jpeg'}") no-repeat fixed center / cover`,
          // backgroundColor: 'rgba(102, 129, 147, 0.4)',
          // backgroundBlendMode: 'multiply'
        }} >
          <div className="headerShadow"></div>
        </div>
        {this.props.children}
      </header >
    );
  }
}

export default Header;
