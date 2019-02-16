import React, { Component } from 'react'

class ProjectCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.projectInfo.name}</p>
        <p>{this.props.projectInfo.date}</p>
        <h1>image</h1>
      </div>
    )
  }
}

export default ProjectCard;