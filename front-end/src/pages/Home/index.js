import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Gif from "../../resources/sleepy.gif";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../../globalComponents/Footer";

class Main extends React.Component {
  mystyle = {
    fontSize: 60,
    fontFamily: "ChalkboardSE-Bold"
  };

  navstyle = {
    width: 50,
    height: 50,
    position: "absolute",
    paddingRight: 10,
    top: 30
  };

  buttonstyle = {
    top: "20px"
  };

  parastyle = {
    fontFamily: "Noteworthy-Bold",
    fontSize: 15,
    textAlign: "center",
    padding: 30
  };

  parastyle1 = {
    position: "absolute",
    fontFamily: "Noteworthy-Bold",
    fontSize: 15,
    textAlign: "center"
  };

  render() {
    return (
      <div style={{ "overflow-x": "hidden" }}>
        <Row style={{ background: "rgb(233, 236, 239)" }}>
          <Container>
            <Row>
              <Col xs={3}>
                <p style={this.mystyle}>eduGraph</p>,
              </Col>
              <Col />
              <Col xs={3} style={{ "padding-top": "3%" }}>
                <Button style={this.buttonstyle} variant="secondary">
                  <Link
                    to="./dashboard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Log In
                  </Link>
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
        <Container>
          <Row style={{ "margin-top": "20" }}>
            <Col style={{ "padding-top": "5%" }}>
              <Row style={{ "margin-bottom": "20" }}>
                <p style={this.parastyle}>
                  <Container style={{ width: "80%" }}>
                    EduGraph is a software that makes learning efforless and
                    tranquil. We build a knowledge graph for each course which
                    helps better tracking of topics and helps assosiate
                    different concepts
                  </Container>
                </p>
              </Row>
              <Row>
                <p style={this.parastyle1}>
                  <Container style={{ width: "80%" }}>
                    EduGraph also tracks your attention at different levels and
                    gives you a score based on your attention and grades. With
                    eduGraph, learning is accelerated and simplified
                  </Container>
                </p>
              </Row>
            </Col>
            <Row>
              <Col />
              <Col>
                <img src={Gif} />
              </Col>
              <Col />
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
