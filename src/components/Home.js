import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header.js';
import About from './About.js';
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {
    render() {
        return (
            <div className="home" id="home">
                <Header className="home-header">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col">
                                <div className="title">
                                    <h1>HAPPY BIRTHDAY</h1>
                                    <h2>KAREN SIN</h2>
                                    <h4>React Master | Algo Genius | Super Fun | Cute AF</h4>
                                    <Link to="/#projects" className="btn collab-btn"><i className=""></i>Learn more about my birthday</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="scrolldown"><Link to="/#projects">
                        <i className="fas fa-angle-double-down"></i>
                    </Link>
                    </section>
                </Header>
                <div className="homeContent">
                    <div className="projBGBG" style={{
                        background: `url("${process.env.PUBLIC_URL + '/images/projects_background.jpg'}") no-repeat center / cover`
                    }}>
                        <div className="projBGShadow">
                            <img alt="background" className="projBG" src={process.env.PUBLIC_URL + '/images/projects_background.jpg'}></img>
                        </div>
                    </div>
                    {/* <Projects /> */}
                    <About />
                    {/* <Resume /> */}
                </div>
            </div >
        );
    }
}

export default Home;
