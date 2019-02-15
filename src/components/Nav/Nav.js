import React, { Component } from 'react';
import menu from '../../css/images/ham.svg';
import exit from '../../css/images/exit.svg'
import '../../css/Nav/Nav.css'




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
      <div className="nav">
        <img src={menu} alt="menu" class="menu" id="menu" onClick={() => this.handleChange()} style={{ visibility: this.state.show ? "hidden" : "visible" }} />
        <img src={exit} alt="exit-btn" class="exit-btn" id="exit-btn" onClick={() => this.toggleMenu()} style={{ visibility: this.state.show ? "visible" : "hidden" }} />
        <ul className="nav-links" style={{ visibility: this.state.show ? "visible" : "hidden" }}>
          <li><a href="#">home</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Nav;