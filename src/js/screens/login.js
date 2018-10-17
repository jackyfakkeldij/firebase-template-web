import { Form, Icon, Input, Button, message, Spin } from "antd";
import React, { Component } from "react";
import * as firebase from "firebase";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: true
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/admin");
      } else {
        this.setState({ loading: false });
      }
    });
  }

  handleSubmit = () => {
    let email = this.state.email;
    let pass = this.state.password;
    if (email !== "" || pass !== "") {
      this.setState({ loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => this.props.history.push("/admin"))
        .catch(() => {
          this.setState({ loading: false });
          message.error("De gegevens kwamen niet overeen");
        });
    } else {
      message.error("Vul alle velden in");
    }
  };

  render() {
    let { loading } = this.state;
    if (loading) {
      return (
        <div id="login">
          <Spin />
        </div>
      );
    }
    return (
      <div id="login">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Input
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            placeholder="Email"
          />
          <Input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Password"
          />
          <Button type="primary" onClick={this.handleSubmit}>
            Log in
          </Button>
        </Form>
      </div>
    );
  }
}
