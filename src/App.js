import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as firebase from "firebase";
import "antd/dist/antd.css";

import "./css/index.css";

import Index from "./js/screens/index";
import Login from "./js/screens/login";
import Dashboard from "./js/screens/admin/dashboard";

import config from "./config.js";

class App extends Component {
  componentWillMount() {
    // Initialize Firebase

    console.log(config);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
