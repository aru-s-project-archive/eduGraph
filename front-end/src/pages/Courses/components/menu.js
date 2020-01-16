import React, { Component } from "react";
import { Row, Container, Col, ListGroup } from "react-bootstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.classes = {
      margin: {
        "margin-top": "3%",
        height: "100%"
      },
      "smaller-margin": {
        "margin-top": "1%",
        "margin-bottom": "1%"
      }
    };

    let courses = [];
    for (let i = 0; i < 10; i++) {
      courses.push("course " + i);
    }
    this.state = {
      courses: courses
    };
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Row
          style={{
            height: "50%",
            "background-color": "#90ee90",
            color: "#ffffff"
          }}
        >
          <Container style={this.classes.margin}>
            <Row>
              <Col xs={1} />
              <Col>
                <h2>Courses</h2>
              </Col>
            </Row>
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
                  {this.state.courses.map((val, index) => (
                    <ListGroup.Item action variant="light">
                      {val}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row style={{ height: "50%", "background-color": "#17a2b8" }}>
          <Container style={this.classes.margin}>
            <Row>
              <Col xs={1} />
              <Col>
                <h2
                  style={{
                    color: "#ffffff"
                  }}
                >
                  View
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xs={1} />
              <Col>
                <ListGroup>
                  <ListGroup.Item action>Knowledge Graph</ListGroup.Item>
                  <ListGroup.Item action>Summary</ListGroup.Item>
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
