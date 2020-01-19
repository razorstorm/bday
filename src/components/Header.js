import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.js';
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
        <Nav />
        {this.props.children}
      </header >
    );
  }
}

export default Header;
