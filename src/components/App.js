import React, { Component } from "react";
import "../assets/scss/main.scss";
import Output from "./Output";
import Form from "./Form";

export default class App extends Component {

  render() {
    return (
      <>
        <Output />
        <Form />
      </>
    )
  }

}
