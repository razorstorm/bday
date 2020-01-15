import React, { Component } from 'react';


class Resume extends Component {
  render (){
      return (  
        <div> 
     
        <img className= 'resume' src={process.env.PUBLIC_URL + "/images/KarenResume1.jpg"}/>   
        <img className= 'resume' src={process.env.PUBLIC_URL + "/images/KarenResume2.jpg"}/>   
        </div>
      );
  }
}
 
export default Resume; 