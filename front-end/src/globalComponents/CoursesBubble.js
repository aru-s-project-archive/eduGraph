import React, { Component } from "react";
import { Jumbotron, ListGroup, Container, Spinner } from "react-bootstrap";
import ColoredLine from "./ColoredLine";
import { Link } from "react-router-dom";

class CoursesBubble extends Component {
  constructor(props) {
    super(props);
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
      <Jumbotron
        style={{
          margin: "5% 0% 5% 0%",
          height: "500px",
          background: "#90ee90"
        }}
      >
        <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>Courses</h2>
        <ColoredLine />
        <ListGroup
          style={{
            padding: "2% 2%",
            width: "100%",
            height: "90%",
            overflow: "scroll"
          }}
        >
          {this.props.courseData ? (
            this.props.courseData.map((val, index) => (
              <ListGroup.Item action variant="light">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={{ pathname: "./courses", state: { course: val } }}
                >
                  {val}
                </Link>
              </ListGroup.Item>
            ))
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
        </ListGroup>
      </Jumbotron>
    );
  }
}

export default CoursesBubble;
