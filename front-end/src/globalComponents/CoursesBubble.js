import React, { Component } from "react";
import { Jumbotron, ListGroup } from "react-bootstrap";
import ColoredLine from "./ColoredLine";

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
    console.log("props", this.props.userData);
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
          {this.props.courseData
            ? this.props.courseData.map((val, index) => (
                <ListGroup.Item action variant="light">
                  {val}
                </ListGroup.Item>
              ))
            : ""}
        </ListGroup>
      </Jumbotron>
    );
  }
}

export default CoursesBubble;
