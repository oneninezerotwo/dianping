import React, { Component } from "react";
import './home.css'

export default class Download extends Component {
  render() {
    return (
      <div>
        <div className="J_download-guide Js_download-guide">
          <div className="wrapper">
            <div className="download-guide border-bottom-new">
              <div className="title">
                <i className="icon" />
                <span className="text">吃喝玩乐，找优惠</span>
              </div>
              <div className="btns">
                <a
                  className="btn-openapp"
                  href="//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fwei-xin%2Fid351091731%3Fmt%3D8&amp;schema=dianping://home?utm_source=ulink_maintop%253Adefault%253ASafari%253Am"
                >
                  打开大众点评
                </a>
                <a
                  className="btn-downloadapp"
                  href="//m.dianping.com/download/redirect?id=11186"
                >
                  下载APP享特价
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
