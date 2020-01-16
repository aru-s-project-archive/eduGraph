import React, { PureComponent } from "react";
import {
  Jumbotron,
  Row,
  Col,
  ListGroup,
  Spinner,
  Container
} from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class AttentionAnalyticsBubble extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let len = this.props.scores.length;
    let latest = this.props.scores[len - 1];
    let average = {};
    let keys;
    if (len) {
      keys = Object.keys(latest);
      for (let i = 0; i < len; i++) {
        for (var key in this.props.scores[i]) {
          if (key === "awayTimes") {
            average[key] += this.props.scores[i][key].length;
          } else if (average[key]) {
            average[key] += this.props.scores[i][key];
          } else {
            average[key] = this.props.scores[i][key];
          }
        }
      }
      for (key in average) {
        average[key] = parseInt(average[key] / len);
      }
      console.log("average", average);
      latest.awayTimes = latest.awayTimes.length;
    }
    return (
      <Jumbotron style={{ background: "#90ee90" }}>
        <Row style={{ marginTop: "-2%" }}>
          <Col>
            <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>
              Latest Session
            </h2>
            <ColoredLine />
            <ListGroup>
              {latest ? (
                keys.map((value, index) => (
                  <ListGroup.Item key={index}>
                    {value} : {latest[value] ? latest[value] : 0}
                  </ListGroup.Item>
                ))
              ) : (
                <Container style={{ color: "white" }}>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Container>
              )}
            </ListGroup>
          </Col>
          <Col>
            <h2 style={{ marginTop: "-2.5%", color: "#ffffff" }}>
              Average Session
            </h2>
            <ColoredLine />
            <ListGroup>
              {Object.keys(average).length ? (
                keys.map((val, index) => (
                  <ListGroup.Item>
                    {val} : {average[val] ? average[val] : 0}
                  </ListGroup.Item>
                ))
              ) : (
                <Container style={{ color: "white" }}>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Container>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default AttentionAnalyticsBubble;
