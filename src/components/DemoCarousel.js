import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

{/* <img alt='resume page 1' className='resumePage' "} />
        <img alt='resume page 2' className='resumePage'  /> */}


class DemoCarousel extends Component {
    render() {
        return (
            <div className="move" >
                <Carousel className="mh-90 mw-100 ">
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
            </div>
        );
    }
};




export default DemoCarousel;