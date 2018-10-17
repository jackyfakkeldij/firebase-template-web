import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Succesvol gecloned {process.env.TEST}</h1>
      </div>
    );
  }
}
