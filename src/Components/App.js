import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Calendar from './Calendar';
import NavBar from './NavBar';
import Profile from './Profile';
import Signin from './Signin';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <NavBar />
          <Route path="/" exact component={Calendar} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={Signin} />
      </div>
      </Router>
    );
  }
}

export default App;
