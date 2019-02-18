import React, { Component } from 'react';
import menu from '../../css/images/ham.svg';
import exit from '../../css/images/exit.svg'
import '../../css/Nav/Nav.css'
import { Link } from 'react-router-dom';




class Nav extends Component {

  state = {
    show: false
  }


  toggleMenu = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleChange = () => {
    this.toggleMenu();
  }

  render() {
    return (
      <nav>
        <img src={menu} alt="menu" className="menu" id="menu" onClick={() => this.handleChange()} style={{ visibility: this.state.show ? "hidden" : "visible" }} />
        <ul className="nav-links" style={{ visibility: this.state.show ? "visible" : "hidden" }}>
          <li>
            <img src={exit} alt="exit-btn" className="exit-btn" id="exit-btn" onClick={() => this.toggleMenu()} style={{ visibility: this.state.show ? "visible" : "hidden" }} />
          </li>
          <li onClick={() => this.handleChange()}><Link to="/">home</Link></li>
          <li onClick={() => this.handleChange()}><Link to="/about">About me</Link></li>
          <li onClick={() => this.handleChange()}><Link to="/pr1">Meet</Link></li>
          <li onClick={() => this.handleChange()}><Link to="/pr2">Weather App</Link></li>
          <li onClick={() => this.handleChange()}><Link to="/pr3">Boozer</Link></li>

          <li onClick={() => this.handleChange()}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;