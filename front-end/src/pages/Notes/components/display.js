import React, { PureComponent } from "react";
import { Jumbotron } from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class Display extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron style={{ marginTop: "5%" }}>
        <h2>{this.props.course}</h2>
        <h3>{this.props.topic}</h3>
        {this.props.notes.map((val, index) => {
          return (
            <div>
              <p>{val}</p>
              <ColoredLine color="white" />
            </div>
          );
        })}
      </Jumbotron>
    );
  }
}

export default Display;
