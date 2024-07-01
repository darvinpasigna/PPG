import '../App.css';
import React from 'react';
import Aboutcontent from '../Components/Aboutcontent';
import NavBar from '../Components/Nav';
const About = () => {
    return (
      <>
        <NavBar />
        <div className="background"></div>
        <Aboutcontent/>
      </>
    );
  }
  
  export default About;