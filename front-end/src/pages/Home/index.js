import React, { createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Gif from "../../resources/sleepy.gif";

class Main extends React.Component {
  mystyle = {
    fontSize: 60,
    fontFamily: "ChalkboardSE-Bold"
  };

  gifpos = {
    padding: 200
  };

  navstyle = {
    width: 50,
    height: 50,
    position: "absolute",
    paddingRight: 10,
    top: 30
  };

  render() {
    return (
      <div>
        <p style={this.mystyle}>EduGraph</p>
        <img style={this.gifpos} src={Gif} />
      </div>
    );
  }
}

export default Main;
