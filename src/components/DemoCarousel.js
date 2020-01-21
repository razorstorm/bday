import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel mh-90 mw-100 ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/KarenResume1.jpg"}
            alt="Resume1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/KarenResume2.jpg"}
            alt="Resume2"
          />
        </Carousel.Item>

      </Carousel>
    );
  }
};




export default DemoCarousel;