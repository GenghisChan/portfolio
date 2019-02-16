import React, { Component } from 'react'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Projects />
      </div>
    )
  }
}
