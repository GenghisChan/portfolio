import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProjectOne from './components/ProjectOne/ProjectOne'
import ProjectTwo from './components/ProjectTwo/ProjectTwo'
import ProjectThree from './components/ProjectThree/ProjectThree'

import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pr1" component={ProjectOne} />
          <Route exact path="/pr2" component={ProjectTwo} />
          <Route exact path="/pr3" component={ProjectThree} />
          <Route exact path="/" component={Home} />

        </Switch>
      </div>
    );
  }
}

export default App;
