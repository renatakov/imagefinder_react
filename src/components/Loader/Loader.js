import Loader from "react-loader-spinner";
import React, { Component } from "react";
export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={30}
        width={30} //3 secs
      />
    );
  }
}
