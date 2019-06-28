import React, { Component } from "react";
import { Link } from "dva/router";
import "./home.css";

export default class Headbar extends Component {
  render() {
    return (
      <div className="J_header Js_header">
        <header className="index-head header_browser">
          <a className="city" href="//m.dianping.com/citylist">
            茂名
          </a>
          <div className="search J_search_trigger">输入商户名、地点</div>
          <Link to="/logregister" className="self">
            <div className="selfOutline" />
          </Link>
          <div id="J_toast" className="toast Hide">
            你可以在这里更改所在城市
          </div>
        </header>
        <div className="header_fill header_browser" />
      </div>
    );
  }
}
