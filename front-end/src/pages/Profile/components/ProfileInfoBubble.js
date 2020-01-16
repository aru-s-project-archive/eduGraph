import React, { PureComponent } from "react";
import {
  Jumbotron,
  Row,
  ListGroup,
  Container,
  Col,
  Button
} from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class ProfileInfoBubble extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.uploaded) {
      return (
        <Jumbotron style={{ background: "#90ee90" }}>
          <Container>
            <Row style={{ marginTop: "-2%" }}>
              <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>Profile</h2>
            </Row>
            <ColoredLine />
            <ListGroup>
              {Object.keys(this.props.info).map((key, index) => (
                <ListGroup.Item>
                  {key} : {this.props.info[key]}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </Jumbotron>
      );
    } else {
      return (
        <Jumbotron style={{ background: "#90ee90" }}>
          <Row style={{ marginTop: "-2%" }}>
            <Col>
              <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>Profile</h2>
            </Col>
          </Row>
          <ColoredLine />
          <Container style={{ padding: "10% 10%", height: "10%" }}>
            <Row>
              <Col />
              <Col xs={3}>
                <Button
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  Upload Degree Audit
                </Button>
              </Col>
              <Col />
            </Row>
          </Container>
        </Jumbotron>
      );
    }
  }
}

export default ProfileInfoBubble;
