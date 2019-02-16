import React, { Component } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'
import projectData from '../../data/project_data'

class Projects extends Component {
  render() {
    const projects = projectData.map(proj => <ProjectCard projectInfo={proj} />)
    return (
      <div>
        <h5>Introduction</h5>
        <p>Full-Stack Web Developer who loves to code and bring ideas to life utilizing languages like Ruby and JavaScript. Proven ability to understand and convey complex information, develop positive rapport, and a strong ability to complete projects within time constraints. Highly motivated person, who knows success comes from communication, team-work, and perseverance. </p>
        {projects}
      </div>
    )
  }
}

export default Projects;