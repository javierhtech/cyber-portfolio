import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Make sure to create and import a CSS file for styling

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2>Projects/Challenges</h2>
      <ul>
        <li>
          <Link to="/windows-domain" className="project-link">Windows Domain Environment</Link>
        </li>
        <li>
          <Link to="/active-directory" className="project-link">Active Directory Management</Link>
        </li>
        <li>
          <Link to="/DodCtf" className="project-link">DoD Cyber Sentinel Challenge</Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

