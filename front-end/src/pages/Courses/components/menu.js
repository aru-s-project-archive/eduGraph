import React, { Component } from "react";
import { Row, Container, Col, ListGroup, Spinner } from "react-bootstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
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

    this.state = {
      selectedCourse: false,
      view: "knowledgeGraph"
    };
  }
  selectCourse = course => {
    this.setState({
      selectedCourse: course
    });
    this.props.setCourse(course);
  };
  selectView = view => {
    this.setState({
      view: view
    });
    this.props.setView(view);
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Row
          style={{
            height: "50%",
            backgroundColor: "#90ee90",
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
                  {this.props.courses ? (
                    this.props.courses.map((val, index) => (
                      <ListGroup.Item
                        action
                        variant={
                          this.state.selectedCourse === val
                            ? "primary"
                            : "light"
                        }
                        onClick={() => {
                          this.selectCourse(val);
                        }}
                        key={val}
                      >
                        {val}
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
        <Row style={{ height: "50%", backgroundColor: "#17a2b8" }}>
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
                  <ListGroup.Item
                    action
                    variant={
                      this.state.view === "knowledgeGraph" ? "primary" : "light"
                    }
                    onClick={() => this.selectView("knowledgeGraph")}
                  >
                    Knowledge Graph
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant={
                      this.state.view === "summary" ? "primary" : "light"
                    }
                    onClick={() => this.selectView("summary")}
                  >
                    Summary
                  </ListGroup.Item>
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
