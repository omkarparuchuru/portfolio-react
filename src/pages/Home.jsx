import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate web developer creating stunning digital experiences.</p>
        <button className="home-btn"><a href="projects">Explore My Work</a></button>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
