import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className='resume' id='resume'>
        <article>
          <img alt='resume page 1' className='resumePage' src={process.env.PUBLIC_URL + "/images/KarenResume1.jpg"} />
          <img alt='resume page 2' className='resumePage' src={process.env.PUBLIC_URL + "/images/KarenResume2.jpg"} />
        </article>
      </div>
    );
  }
}

export default Resume; 