import React, { Component } from 'react';
import '../App.css';



class Contacts extends Component {
  render() {
    return (
      <div>
        <section className='contacts' id="contacts">
          <h3> Get in Touch </h3>
          <section className='contactsList'>
            <a target="_blank" href="mailto: kkwsin@gmail.com">
              <i class="fas fa-2x fa-envelope"></i>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/karensin94/'>
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
            <a target="_blank" href='https://github.com/karensin'>
              <i class="fab fa-2x fa-github"></i>
            </a>
            <a target="_blank" href='https://angel.co/karen-kaweng-sin'>
              <i class="fa fa-2x fa-angellist"></i>
            </a>
          </section>
        </section>
        <footer>
          <span className="copyright">Karen Sin 2019</span>
        </footer>
      </div>
    );
  }
}

export default Contacts;
