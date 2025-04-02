import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 1" className="project-image" />
          <h2 className="project-title">Project One</h2>
          <p className="project-description">A modern web project with an interactive UI.</p>
          <a href="#" className="project-button">View Project</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 2" className="project-image" />
          <h2 className="project-title">Project Two</h2>
          <p className="project-description">An awesome project showcasing cutting-edge features.</p>
          <a href="#" className="project-button">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

