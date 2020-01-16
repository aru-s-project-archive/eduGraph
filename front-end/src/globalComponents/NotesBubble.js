import React, { PureComponent } from "react";
import { Jumbotron, ListGroup, Row } from "react-bootstrap";
import ColoredLine from "./ColoredLine";

class NotesBubble extends PureComponent {
  constructor(props) {
    super(props);
    let notes = [];
    for (let i = 0; i < 10; i++) {
      notes.push("notes " + i);
    }
    this.state = {
      notes: notes
    };
  }

  render() {
    return (
      <Jumbotron
        style={{ "margin-top": "40px", height: "500px", background: "#90ee90" }}
      >
        <h2 style={{ "margin-top": "-2.5%", color: "#ffffff" }}>Notes</h2>
        <ColoredLine color="#ffffff" />
        <ListGroup
          style={{
            padding: "2% 2%",
            width: "100%",
            height: "90%",
            overflow: "scroll"
          }}
        >
          {this.state.notes.map((val, index) => (
            <ListGroup.Item action variant="light">
              <Row>
                <h4>{"topic " + index}</h4>
              </Row>
              <Row>{val}</Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Jumbotron>
    );
  }
}

export default NotesBubble;
