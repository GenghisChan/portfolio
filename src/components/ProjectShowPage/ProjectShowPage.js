import React from 'react'
import '../../css/ProjectShowPage/ProjectShowPage.css'

const ProjectShowPage = () => {
  return (
    <div>
      <div className="banner">
        <h5>project 1</h5>
        <h3>Project name</h3>
      </div>
      <div className="description">
        <p>the 'Serious Study' is an study group for graphics programing inspired by the idea that coding by designers feels similar to DOS screen UI, it is characterized by interaction through keyboard commands.</p>
        <ul>
          <li>
            <h5>Date</h5>
            <h3>2018.11</h3>
          </li>
          <li>
            <h5>Design</h5>
            <h3>Christofer Chan</h3>
          </li>
          <li>
            <h5>Development</h5>
            <h3>Christofer Chan</h3>
          </li>
          <li>
            <h5>URL</h5>
            <h3>christoferchan.com/meet</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectShowPage;