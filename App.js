import React, { Component } from 'react';
import './App.css';
import Home from "./containers/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comments from "./containers/comments";
import Users from "./containers/users";

class App extends React.Component {
  render() {
    return (
        <Router>
      <div>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <hr />

      <Route path="/" component={Home} />
      <Route exact path="/comments" component={Comments} /> 
      <Route path="/users" component={Users} />
      </div>
      </Router>
    );
  }
}

export default App;
