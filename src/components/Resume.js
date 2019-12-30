import React, { Component } from 'react';


class Resume extends Component {
  render (){
      return (  
     
        <img className= 'resume' src={process.env.PUBLIC_URL + "/images/resume.jpg"}/>   
 
      );
  }
}
 
export default Resume; 