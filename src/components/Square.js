import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { Card, Button } from 'react-bootstrap';

import './Projects.css';

class Square extends Component {
  render() {
    const squareSize = '300px';
    return (

      // <Card style={{ width: '18rem' }}>
      //   <Card.Img style={{
      //     width: '18rem',
      //     height: '18rem',
      //     backgroundImage: "url(" + this.props.imgSrc + ")"
      //   }}
      //     variant="top" src={this.props.imgSrc} />
      //   <Card.Body>
      //     <Card.Title>Card Title</Card.Title>
      //     <Card.Text>
      //       Some quick example text to build on the card title and make up the bulk of
      //       the card's content.
      //     </Card.Text>
      //     <Button variant="primary">Go somewhere</Button>
      //   </Card.Body>
      // </Card>

      <div className="squareContainer">
        <div className="square flip-card">
          <a href={this.props.linkSrc} className={this.props.className}
            style={{
              width: '20rem',
              height: '20rem'
            }}>
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-face">
                <div className="projectImg" style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: "url(" + this.props.imgSrc + ")"
                }} />
              </div>
              <div class="flip-card-back flip-card-face">
                {this.props.children}
              </div>
            </div>
          </a>
        </div>
        <div className="projectName">{this.props.projName}</div>
      </div>
    );
  }
}

export default Dimensions()(Square);

