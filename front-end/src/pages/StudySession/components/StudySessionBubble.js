import React, { PureComponent } from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";
class StudySession extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Jumbotron>
        <Container>
          <Row style={{ "margin-top": "-2.5%" }}>
            <Col />
            <Col xs={6}>
              <h1>{this.props.title}</h1>
            </Col>
            <Col />
          </Row>
          <ColoredLine color="#000000" />
          <Row style={{ "margin-bottom": "1.5%" }}>
            <p>{this.props.description}</p>
          </Row>
          <Row>
            <Col />
            <Col xs={1}>
              <Button variant="success">Start</Button>
            </Col>
            <Col xs={1}>
              <Button variant="warning">Break</Button>
            </Col>
            <Col xs={1}>
              <Button variant="danger">Stop</Button>
            </Col>
            <Col />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default StudySession;
