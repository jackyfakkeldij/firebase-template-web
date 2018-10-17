import React, { Component } from "react";
import * as firebase from "firebase";
import { Menu, Icon, Spin } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    const user = firebase.auth().currentUser;
    console.log({ user });
    if (user) {
      this.setState({ loading: false });
    } else {
      this.props.history.push("/login");
    }
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.history.push("/login"));
  }

  render() {
    let { loading } = this.state;
    if (loading) {
      return (
        <div
          style={{
            textAlign: "center",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            display: "flex"
          }}
        >
          <img
            style={{ width: "60px" }}
            src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif"
            alt=""
          />
        </div>
      );
    }
    return (
      <div id="dashboard">
        <Menu
          onClick={this.handleClick}
          style={{ width: 200, height: "100vh" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <p onClick={() => this.logout()}>Logout</p>
          </Menu.Item>
        </Menu>
        <div className="wrapper">{this.props.children}</div>
      </div>
    );
  }
}
