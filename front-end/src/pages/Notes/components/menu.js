import React, { Component } from "react";
import { Row, Container, Col, ListGroup, Spinner } from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { selectCourse: false };
    this.classes = {
      margin: {
        marginTop: "3%",
        height: "100%"
      },
      "smaller-margin": {
        marginTop: "1%",
        "margin-bottom": "1%"
      }
    };
  }
  selectCourse = course => {
    this.setState({
      selectedCourse: course
    });
  };
  setNote = (course, topic) => {
    this.setState({
      course: course,
      topic: topic
    });
    this.props.setNote(course, topic);
  };
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
      <div style={{ height: "100%" }}>
        <Row
          style={{
            height: "100%",
            backgroundColor: "#90ee90",
            color: "#ffffff"
          }}
        >
          <Container style={this.classes.margin}>
            <Row>
              <Col xs={1} />
              <Col>
                <h2>Notes</h2>
              </Col>
            </Row>
            <ColoredLine />
            <Row style={{ height: "100%" }}>
              <Col xs={1} />
              <Col style={{ height: "100%" }}>
                <ListGroup
                  style={{
                    width: "100%",
                    height: "80%",
                    overflow: "scroll"
                  }}
                >
                  {notesInner.length ? (
                    notesInner.map((val, Menu) => (
                      <ListGroup.Item
                        action
                        variant={
                          val.course === this.state.course &&
                          val.topic === this.state.topic
                            ? "info"
                            : "light"
                        }
                        onClick={() => {
                          this.setNote(val.course, val.topic);
                        }}
                        key={val.topic + val.course}
                      >
                        <Row>
                          <Col>
                            <h5>{val.course}</h5>
                          </Col>
                        </Row>
                        <Row>
                          <Col>{val.topic}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <Container>
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </Container>
                  )}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Row>
      </div>
    );
  }
}

export default Menu;
