import React, { Component } from 'react';
import '../App.css';
 
 
class Contact extends Component {
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

            <div className="title">
                <h1> KAREN SIN </h1>
                <h4> Developer | Web designer | Explorer </h4>
                <a href="/" className="btn"> Let's Collab!</a> 
            </div>
            
        </div>
    </header>
              
    <section className='contacts'> 
          <h3> Get in touch </h3>
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

export default Contact;
