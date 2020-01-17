import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.js';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={this.props.className + " intro-header"} style={{
        background: `url("${'/images/header.jpeg'}") no-repeat fixed center / cover`
      }} >
        <Nav />
        {this.props.children}
      </header >
    );
  }
}

export default Header;
