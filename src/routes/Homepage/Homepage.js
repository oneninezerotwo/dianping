import React, { Component } from "react";
import Headbar from "../../components/Home/Headbar.js";
import Download from "../../components/Home/Download.js";
import Nav from "../../components/Home/Nav.js";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Headbar />
        <Download />
        <Nav />
      </div>
    );
  }
}
