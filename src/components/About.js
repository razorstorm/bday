import React, { Component } from 'react';
import '../App.css';
 
 
class About extends Component {
  render (){
    return (
        <div>
        <header className="App-header">
        <div className="container">
            <div className="row">
                    <nav>
                        <ul> 
                            <li><a href= "/"> Home </a> </li> 
                        </ul>
                    </nav>
            </div>
            <h3 className='title'> Hello There... </h3> 

             </div>
    </header>
                 <section className='aboutme'> 
                    <h3 className= 'titleName'>Experience... </h3>

                    <p className= 'aboutme'>  
                    I am a web designer/ developer /former data analyst based in San Francisco, California.
                    I am passionate in frontend development and technology. My goals are to focus on typography and create simple and user friendly UI/UX experience. 
                    My former experience at Apple allowed me to work and improve as a team player. 
                    I have successfully assisted and assured the precision of data gathered and assisted in implementing into Apple maps. 
                    I have worked closely with the design team on new map features which included planning out workflows on the delivery of the features to maximize readability,
                    interface behaviors and how information is being navigated and displayed. 
                    </p>
                    <h3 className= 'titleName'>Values... </h3>
                    <p className='aboutme '> 
                    Growing up from a traditional Chinese family, my parents taught me to be someone that is responsible, empathic and respect others. With the morals and values they taught me, it has helped me in growing to be a great team player and a leader. 
                    I was the president of an animal rights club and led a group 35 students in all grades in learning about animal rights, educating others and volunteering in rehabilitating strays / abandoned animals back to the society. 
                    I am also an active lead in both Solano animal shelter and San Francisco SPCA in rehabilitating companion animals. 
                    </p>
                    </section>
              
    <section className='contacts'> 
 
          <a>  kkwsin@gmail.com  </a>
         <a href= 'https://www.linkedin.com/in/karensin94/'>  Linkedin  </a>
         <a href= 'https://github.com/karensin'>  Github   </a> 
         <a href= 'https://angel.co/karen-kaweng-sin'> Angel.co </a>
             
        
         </section>
         <footer> Karensin 2019 </footer>
    </div>

  );
  }
}

export default About;
