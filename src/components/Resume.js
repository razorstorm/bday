import React, { Component } from 'react';
import DemoCarousel from './DemoCarousel.js';


class Resume extends Component {
  render() {
    return (
      <section className='resume homePageSection' id='resume'>
        <h2 className="pageTitle">Resume</h2>
        <DemoCarousel />
      </section >
    );
  }
}

export default Resume;

