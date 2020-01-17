import React, { Component } from 'react';


class Resume extends Component {
  render() {
    return (
      <article>
        <img alt='resume page 1' className='resume' src={process.env.PUBLIC_URL + "/images/KarenResume1.jpg"} />
        <img alt='resume page 2' className='resume' src={process.env.PUBLIC_URL + "/images/KarenResume2.jpg"} />
      </article>
    );
  }
}

export default Resume; 