import React, { Component } from 'react';
import '../App.css';



class Contacts extends Component {
  render() {
    return (
      <section className="pageFooter">
        <section className='contacts' id="contacts">
          <h3>Get in Touch</h3>
          <h4 className="align-left p-2">
            <p className="text-align-left">Connect with me so we can start planning our new project!</p>
          </h4>
          <section className='contactsList'>
            <a target="_blank" href="mailto: kkwsin@gmail.com">
              <i className="fas fa-2x fa-envelope"></i>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/karensin94/'>
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
            <a target="_blank" href='https://github.com/karensin'>
              <i className="fab fa-2x fa-github"></i>
            </a>
            <a target="_blank" href='https://angel.co/karen-kaweng-sin'>
              <i className="fa fa-2x fa-angellist"></i>
            </a>
          </section>
        </section>
        <footer>
          <span className="copyright">Karen Sin 2019</span>
        </footer>
      </section>
    );
  }
}

export default Contacts;
