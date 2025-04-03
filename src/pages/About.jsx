import React from "react";
import "./About.css"; // Import the CSS file
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
        Hello! I am a beginner web developer learning React.
        I love building websites and exploring new technologies.
      </p>
      {/* <img 
        src="../assets/blurwall.jpeg" 
        alt="Profile" 
        className="about-image"
      /> */}
      <img src={aboutImg} 
      alt="About Us" 
      className="about-image"
      />;
    </div>
  );
};

export default About;
