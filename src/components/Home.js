import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Nav from './Nav.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <header className="home-header intro-header">
          <Nav />
          <div className="container">
            <div className="title">
              <h1> KAREN SIN </h1>
              <h4> Developer | Web Designer | Data Analyst </h4>
              <a href="#contacts" className="btn"> Let's Collab!</a>
            </div>
          </div>
        </header>
        <section className='projects' id="projects">
          <Projects />
        </section>
        <section className='resume' id='resume'>
          <Resume />
        </section>
      </div>
    );
  }
}

export default Home;
