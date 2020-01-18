import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import Square from './Square.js';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projectsWrapper">
                <section className='projects' id="projects">
                    <Container fluid={true}>
                        <Row className='projectsBox'>
                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/MeeseeksBox.jpg"}
                                    linkSrc="https://www.facebook.com/meeseeksBox2019" projName="Meeseeks Bot">
                                    <p className="description">
                                        Meeseeks bot is a messenger bot that is designed to perform automated voice
                                        and text message responses. This technology required webhooks for token
                                        verification and special features to make the user experience more entertaining
                                        and exciting.
                                    </p>
                                </Square>
                            </Col>

                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/bloccit.png"}
                                    linkSrc="https://karensin-bloccit.herokuapp.com/" projName="Bloccit">
                                    <p className='description'>
                                        An Application that uses the Model-View-Controller Pattern (MVC) to handle a seperation of concerns,
                                        allowing easier manipulation in sections and functionality.
                                        Application utilizes ExpressJS - Middleware to perform authentication and validation which allows users to sign up,
                                        sign in and create topics, posts, comments and votes amongst others.
                                    </p>
                                </Square>
                            </Col>
                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/Chatty.png"}
                                    linkSrc="https://chat-ty.herokuapp.com/" projName="Chatty">
                                    <p className='description'>
                                        An application based on Firebase (BaaS) that authenticate users
                                        using Google sign-in, sends and recieves messages in real time
                                    </p>
                                </Square>
                            </Col>

                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/musicPlayer.jpg"}
                                    linkSrc="https://jams-ksin.herokuapp.com/" projName="MusicPlayer">
                                    <p className='description'>
                                        A music player made using React Router to create a Single-Page Application to handle client-side page transitions
                                    </p>
                                </Square>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}


export default Projects;
