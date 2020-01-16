import React, { PureComponent } from "react";
import { Jumbotron, ListGroup, Row, Container, Spinner } from "react-bootstrap";
import ColoredLine from "./ColoredLine";

class NotesBubble extends PureComponent {
  constructor(props) {
    super(props);
    let notes = [];
    for (let i = 0; i < 10; i++) {
      notes.push("notes " + i);
    }
    this.state = {
      notes: notes,
      course: "",
      topic: ""
    };
  }

  render() {
    let notesOuter = this.props.notes;
    let notesInner = [];
    if (notesOuter) {
      for (var courseId in notesOuter) {
        for (var topic in notesOuter[courseId]) {
          notesInner.push({
            topic: topic,
            course: courseId
          });
        }
      }
    }
    return (
      <Jumbotron
        style={{ marginTop: "40px", height: "500px", background: "#90ee90" }}
      >
        <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>Notes</h2>
        <ColoredLine color="#ffffff" />
        {notesInner.length ? (
          <ListGroup
            style={{
              padding: "2% 2%",
              width: "100%",
              height: "90%",
              overflow: "scroll"
            }}
          >
            {notesInner.map((val, index) => (
              <ListGroup.Item action variant="light">
                <Row>
                  <h5>{val.course}</h5>
                </Row>
                <Row>{val.topic}</Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Container>
            <Spinner
              style={{ color: "white" }}
              animation="border"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Container>
        )}
      </Jumbotron>
    );
  }
}

export default NotesBubble;
