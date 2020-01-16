import React, { PureComponent } from "react";
import { Jumbotron, Row, Col, ListGroup } from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class AttentionAnalyticsBubble extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Jumbotron style={{ background: "#90ee90" }}>
        <Row style={{ marginTop: "-2%" }}>
          <Col>
            <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>
              Latest Session
            </h2>
            <ColoredLine />
            <ListGroup>
              {Object.keys(this.props.info.latest).map((value, index) => (
                <ListGroup.Item>
                  {value} : {this.props.info.latest[value]}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>
              Average Session
            </h2>
            <ColoredLine />
            <ListGroup>
              {Object.keys(this.props.info.average).map((value, index) => (
                <ListGroup.Item>
                  {value} : {this.props.info.average[value]}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default AttentionAnalyticsBubble;
