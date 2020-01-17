import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { HashLink as Link } from 'react-router-hash-link';

class Nav extends Component {
  render() {
    return (
      <div className="row">
        <nav className='navbar'>
          <ul>
            <li><Link to="#contacts">Contact</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#resume" >Resume</Link></li>
            <li><Link to="/"> Home </Link> </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
