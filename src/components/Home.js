import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js';
import Resume from './Resume.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <header className="home-header intro-header">
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

        <section className='contacts' id='contacts'>
          <h3>Get in touch</h3>
          <a>kkwsin@gmail.com</a>
          <a href='https://www.linkedin.com/in/karensin94/'>Linkedin</a>
          <a href='https://github.com/karensin'>Github</a>
          <a href='https://angel.co/karen-kaweng-sin'>Angel.co</a>
        </section>
      </div >
    );
  }
}

export default Home;
