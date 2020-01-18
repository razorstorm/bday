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
                                        A <strong>facebook messenger bot</strong> that is automatically responds with text and voice lines from Rick and Morty. This project utilized <strong>webhooks</strong> for token authentication and the <strong>facebook messenger api</strong> to read and send messages.
                                        and exciting.
                                    </p>
                                </Square>
                            </Col>

                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/bloccit.png"}
                                    linkSrc="https://karensin-bloccit.herokuapp.com/" projName="Bloccit">
                                    <p className='description'>
                                        An <strong>online content aggregator</strong> and discussion community with <strong>ExpressJS</strong> and utilizes the <strong>Model-View-Controller (MVC)</strong> Pattern. The application uses <strong>ExpressJS Middleware</strong> to perform authentication and validation which allows users to sign up,
                                        sign in and create topics, posts, comments and votes amongst others.
                                    </p>
                                </Square>
                            </Col>
                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/Chatty.png"}
                                    linkSrc="https://chat-ty.herokuapp.com/" projName="Chatty">
                                    <p className='description'>
                                        An <strong>instant messaging</strong> system with <strong>Firebase (BaaS)</strong> backend. Chat-ty allows users to authenticate
                                        using <strong>Google sign-in</strong> to sends and recieves messages in real time.
                                    </p>
                                </Square>
                            </Col>

                            <Col>
                                <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/musicPlayer.jpg"}
                                    linkSrc="https://jams-ksin.herokuapp.com/" projName="MusicPlayer">
                                    <p className='description'>
                                        A <strong>HTML5 music player</strong> made using <strong>React</strong> and <strong>React Router</strong> to create a Single-Page Application to handle client-side page transitions.
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
