import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Projects from './components/Projects.js';
import Bubbles from './components/Bubbles.js';
import Resume from './components/Resume.js'; 
 

const bubbleMoveSpeed = 2.5;
const minBubbleTime = 50;
const maxBubbleTime = 1000;
const minBubbleSize = 0.02;
const maxBubbleSize = 0.14;
const jitterSpeed = 0.3;
const minJitterUTurn = 2000;
const maxJitterUTurn = 6000;
const minGrowthTime = 100;
const maxGrowthTime = 200;
const minGrowthRate = 0.001;
const maxGrowthRate = 0.003;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0, 
      y: 0,
      bubbles: []
    };
  }

  _onMouseMove(e) {
    const currTime = + new Date();
    if (currTime > this.state.lastBubbleStamp + getRandomArbitrary(minBubbleTime, maxBubbleTime)) {
      const direction = Math.random() > 0.5 ? -1 : 1;
      this.state.bubbles.push({x:e.pageX, y: e.pageY, size: getRandomArbitrary(minBubbleSize, maxBubbleSize), direction: direction, lastTurnTime: currTime, lastGrowTime: currTime});
      this.setState({lastBubbleStamp: currTime});
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateBubbles() {
    if (this.state) {
      const currTime = + new Date();
      const newBubbles = this.state.bubbles.map(bubble => {
        let direction = bubble.direction;
        let lastTurnTime = bubble.lastTurnTime;
        let lastGrowTime = bubble.lastGrowTime;
        let size = bubble.size;
        if (currTime > lastTurnTime + getRandomArbitrary(minJitterUTurn, maxJitterUTurn)) {
          direction = -direction;
          lastTurnTime = currTime;
        }
        if (currTime > lastGrowTime + getRandomArbitrary(minGrowthTime, maxGrowthTime)) {
          lastGrowTime = currTime;
          size += getRandomArbitrary(minGrowthRate, maxGrowthRate);
        }
        if (bubble.y < 0) {
          return null;
        }
        return {
          x: bubble.x + direction * jitterSpeed,
          y: bubble.y - bubbleMoveSpeed,
          size: size,
          direction: direction,
          lastTurnTime: lastTurnTime,
          lastGrowTime: lastGrowTime
        }
      }).filter(bubble => {
        return bubble !== null
      });
      this.setState({bubbles: newBubbles});
    }
  }

  componentDidMount() {
    this.setState({lastBubbleStamp: + new Date()}); // this is some js bullshit that lets you convert a date object to a timestamp: https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
    this.interval = setInterval(this.updateBubbles.bind(this), 20);
  }

  render() {
    const bubbles = this.state.bubbles.map((bubble, i) => {
      return <Bubbles x={bubble.x} y={bubble.y} size={bubble.size} key={i}/>
    });
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this) }>
        <div className="bob"> 
        {bubbles}
        </div>
        <header className="App-header">
            <div className="container">
                <div className="row">
                        <nav>
                            <ul>
                            <li><a href="#contacts">Contact</a></li>
                            <li><a href="/about">About Me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href= "#resume" >Resume</a></li>
                            <li><a href= "/"> Home </a> </li> 
                            </ul>
                        </nav>
                </div>

                <div className="title">
                    <h1> KAREN SIN </h1>
                    <h4> Developer | Web designer | Data Analyst </h4>
                    <a href="#contacts" className="btn"> Let's Collab!</a> 
                </div>
            </div>
        </header>
        <section className= 'projects' id= "projects">
          
          <Projects/>
          
        </section>
        <section className= 'resume' id='resume'> 
         <Resume/> 
   
        </section>

        <section className='contacts' id='contacts'> 
          <h3> Get in touch </h3>
          <a>  kkwsin@gmail.com  </a>
         <a href= 'https://www.linkedin.com/in/karensin94/'>  Linkedin  </a>
         <a href= 'https://github.com/karensin'>  Github   </a> 
         <a href= 'https://angel.co/karen-kaweng-sin'> Angel.co </a>
             
        
         </section>

         <footer> KarenSin 2019</footer>

      </div>
    );
  }
}

export default App;
