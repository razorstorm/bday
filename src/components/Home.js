import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Header from './Header.js';
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header className="home-header intro-header">
          <div className="title">
            <h1> KAREN SIN </h1>
            <h4> Developer | Web Designer | Data Analyst </h4>
            <Link to="/#contacts" className="btn collab-btn">Let's Collab</Link>
          </div>
        </Header>
        <div className="projBGBG" style={{
          background: `url("${process.env.PUBLIC_URL + '/images/projects_background.jpg'}") no-repeat center / cover`
        }}>
          <div className="projBGShadow">
            <img alt="background" className="projBG" src={process.env.PUBLIC_URL + '/images/projects_background.jpg'}></img>
          </div>
        </div>
        <Projects />
        <Resume />
      </div >
    );
  }
}

export default Home;
