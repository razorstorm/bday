import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Header from './Header.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header className="home-header">
          <div className="container">
            <div className="title">
              <h1> KAREN SIN </h1>
              <h4> Developer | Web Designer | Data Analyst </h4>
              <a href="#contacts" className="btn"> Let's Collab!</a>
            </div>
          </div>
        </Header>
        <Projects />
        <Resume />
      </div >
    );
  }
}

export default Home;
