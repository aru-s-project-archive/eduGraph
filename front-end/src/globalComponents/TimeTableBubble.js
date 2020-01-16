import React, { Component } from "react";
import { Jumbotron, Container, Button, Col, Row } from "react-bootstrap";
import ColoredLine from "./ColoredLine";

class TimeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploaded: !true
    };
  }

  render() {
    return (
      <Jumbotron style={{ height: "400px", background: "#90ee90" }}>
        <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>Time Table</h2>
        <ColoredLine />
        {this.state.uploaded ? (
          <div>time table uploaded</div>
        ) : (
          <Container style={{ padding: "10% 10%", height: "10%" }}>
            <Row>
              <Col />
              <Col xs={2}>
                <Button
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  Coming soon...
                </Button>
              </Col>
              <Col />
            </Row>
          </Container>
        )}
      </Jumbotron>
    );
  }
}

export default TimeTable;
