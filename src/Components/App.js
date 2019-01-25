import React, { Component } from "react";
import "./App.css";
import {Router, Route, Switch } from "react-router-dom";
import Calendar from './Calendar';
import NavBar from './NavBar';
import Profile from './Profile';
import Other from './Other';
import EventCreator from "./EventCreator";
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="App">
          <NavBar />
          <Switch>
          <Route path="/" exact component={Calendar} />
          <Route path="/profile" component={Profile} />
          <Route path="/other" component={Other} />
          <Route path="/create" component={EventCreator} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
