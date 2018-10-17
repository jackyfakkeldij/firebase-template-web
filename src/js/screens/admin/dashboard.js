import { Form, Icon, Input, Button, message, Spin } from "antd";
import React, { Component } from "react";
import * as firebase from "firebase";
import Dashboard from "../../components/layout/Dashboard";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Dashboard history={this.props.history}>
        <div id="login">Dashboard</div>
      </Dashboard>
    );
  }
}
