import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.js';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className={this.props.className + " intro-header"} style={{
        background: `url("${process.env.PUBLIC_URL + '/images/header.jpeg'}") no-repeat fixed center / cover`
      }} >
        <Nav />
        {this.props.children}
      </header >
    );
  }
}

export default Header;
