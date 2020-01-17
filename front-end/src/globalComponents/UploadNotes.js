import React, { Component } from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";
import ColoredLine from "./ColoredLine";

class UploadNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploaded: !true
    };
    this.style = {
      whiteText: {
        color: "white"
      }
    };
  }
  submit = () => {
    var courseId = document.getElementById("course").value;
    var notes = document.getElementById("notes").value;
    console.log(courseId, notes);
  };
  returnForm = () => {
    return (
      <Form style={this.style.whiteText}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h5>Course</h5>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter course" id="course" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h5>Notes</h5>
          </Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "250px" }}
            rows="3"
            id="notes"
          />
        </Form.Group>
        <Button variant="light" onClick={this.submit}>
          Upload
        </Button>
      </Form>
    );
  };

  render() {
    return (
      <Jumbotron style={{ height: "600px", background: "#90ee90" }}>
        <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>UploadNotes</h2>
        <ColoredLine />
        {this.returnForm()}
      </Jumbotron>
    );
  }
}

export default UploadNotes;
