import React, { Component } from 'react';
import Header from './Header.js';
import Contacts from './Contacts.js';
import Nav from './Nav.js';
import { HashLink as Link } from 'react-router-hash-link';
import DemoCarousel from './DemoCarousel.js';



class Resume extends Component {
  render() {
    return (
      <div className='home' id='resume'>
        <Header className="home-header intro-header" >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col">
                <div className="title">
                  <h1> KAREN SIN </h1>
                  <h4> Developer | Web Designer | Data Analyst </h4>

                  <Link to="#contacts" className="btn collab-btn"> <i class="fas fa-users"></i> Connect with me</Link>

                </div>

              </div>

            </div>

          </div>
          <section className="scrolldown"><Link to="#resume2"><i className="fas fa-angle-double-down"></i></Link></section>
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
        <section className="resume2" id="resume2">
          <DemoCarousel />
        </section>
        <Contacts />
      </div >
    );
  }
}

export default Resume;

