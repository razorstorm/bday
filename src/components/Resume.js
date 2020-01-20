import React, { Component } from 'react';
import Header from './Header.js';
import Contacts from './Contacts.js';
import Nav from './Nav.js';
import { HashLink as Link } from 'react-router-hash-link';
import DemoCarousel from './DemoCarousel.js';
import About from './About.js';


class Resume extends Component {
  render() {
    return (
      <div className='home' id='resume'>
        <Header className="home-header intro-header" >
          <div className="title">
            <h1> KAREN SIN </h1>
            <h4> Developer | Web Designer | Data Analyst </h4>
            <Link to="/#contacts" className="btn collab-btn"> Download resume</Link>
          </div>
          <section className="scrolldown"><Link to="/#projects"><i className="fa fa-angle-double-down"></i></Link></section>
        </Header>
        <div className="projBGBG" style={{
          background: `url("${process.env.PUBLIC_URL + '/images/projects_background.jpg'}") no-repeat center / cover`
        }}>
          <div className="projBGShadow">
            <img alt="background" className="projBG" src={process.env.PUBLIC_URL + '/images/projects_background.jpg'}></img>
          </div>
          <div className="projBGShadow">
            <img alt="background" className="projBG" src={process.env.PUBLIC_URL + '/images/projects_background.jpg'}></img>
          </div>
        </div>
        <DemoCarousel />
        <Contacts />
      </div>

    );
  }
}

export default Resume; 