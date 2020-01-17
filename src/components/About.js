import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';


class About extends Component {
  render() {
    return (
      <div>
        <header className="head-header">
          <div className="container">
            <Nav />
            <h3 className='title'> Hello There... </h3>

          </div>
        </header>
        <section className='aboutme'>
          <h3 className='titleName'>Experience... </h3>

          <p className='aboutme'>
            I am a web designer/ developer /former data analyst based in San Francisco, California.
            I am passionate in frontend development and technology. My goals are to focus on typography and create simple and user friendly UI/UX experience.
            My experience at Apple allowed me to work and improve as a team player.
            I worked closely with designers on new map features which included planning out workflows on the delivery of the features to maximize discoverability,
            interface behaviors, and how information is being navigated and displayed. I built analytics dashboards with PostgreSQL, ArcGIS, and QGIS to report on
            traffic and road alterations via large datasets.
                    </p>
          <h3 className='titleName'>Values... </h3>
          <p className='aboutme '>
            Growing up from a traditional Chinese family, my parents taught me to be someone that is responsible, empathic and respect others. With the morals and values they taught me, it has helped me in growing to be a great team player and a leader.
            I was the president of an animal welfare club and led a group 35 students to learn and educate others on animal rights and welfare, rehabilitating strays / abandoned companion animals back to the society.
            I am also an active lead in both Solano animal shelter and San Francisco SPCA in rehabilitating companion animals.
                    </p>
        </section>

        <section className='contact' id='contact'>

          <a>  kkwsin@gmail.com  </a>
          <a href='https://www.linkedin.com/in/karensin94/'>  Linkedin  </a>
          <a href='https://github.com/karensin'>  Github   </a>
          <a href='https://angel.co/karen-kaweng-sin'> Angel.co </a>


        </section>
        <footer> Karensin 2019 </footer>
      </div>

    );
  }
}

export default About;
