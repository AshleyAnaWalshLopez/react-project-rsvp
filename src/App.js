import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Menu from './Menu.js';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">RSVP</Link>{' '}
            <Link to="/menu">Menu</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
