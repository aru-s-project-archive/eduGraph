import React, { PureComponent } from "react";
import { Jumbotron, Row, ListGroup, Container, Spinner } from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class ProfileInfoBubble extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Jumbotron style={{ background: "#90ee90", height: "500px" }}>
        <Container>
          <Row style={{ marginTop: "-2%" }}>
            <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>Profile</h2>
          </Row>
          <ColoredLine />
          {this.props.info ? (
            <ListGroup style={{ overflow: "scroll" }}>
              {Object.keys(this.props.info).map((key, index) => (
                <ListGroup.Item key={index}>
                  {key} : {this.props.info[key]}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <Spinner
              style={{ color: "white" }}
              animation="border"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Container>
      </Jumbotron>
    );
  }
}

export default ProfileInfoBubble;
