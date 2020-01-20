import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import { HashLink as Link } from 'react-router-hash-link';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="row">
          <div className="col float-left"> <Link to="/#contacts"> </Link></div>
          <div className="col float-right"><Link to="/#contacts">Contact</Link></div>
          <div className="col float-right"><Link to="/#about">About Me</Link></div>
          <div className="col float-right"><Link to="/#projects">Projects</Link></div>
          <div className="col float-right"><Link to="/resume" >Resume</Link></div>
          <div className="col float-right"><Link to="/"> Home </Link> </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
