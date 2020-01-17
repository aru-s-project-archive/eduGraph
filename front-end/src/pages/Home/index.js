import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Gif from "../../resources/sleepy.gif";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../../globalComponents/Footer";

class Main extends React.Component {
  mystyle = {
    fontSize: "2rem",
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

  parastyle1 = {
    fontFamily: "Noteworthy-Bold",
    fontSize: "1.2rem"
  };

  render() {
    return (
      <div style={{ "overflow-x": "hidden" }}>
        <Row style={{ background: "rgb(233, 236, 239)", height: "100" }}>
          <Container>
            <Row>
              <Col xs={3} style={{ paddingTop: "10px" }}>
                <p style={this.mystyle}>EduGraph</p>,
              </Col>
              <Col />
              <Col xs={3} style={{ "padding-top": "20px" }}>
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
                <p style={this.parastyle1}>
                  <Container>
                    EduGraph is a software that makes learning efforless and
                    tranquil.
                  </Container>
                </p>
              </Row>
              <Row style={{ height: "40px" }} />
              <Row style={{ "margin-bottom": "20" }}>
                <p style={this.parastyle1}>
                  <Container>
                    We build a knowledge graph using Natural Language Processing
                    for each course, this helps you keep better track of topics
                    and helps assosiate different concepts
                  </Container>
                </p>
              </Row>
              <Row style={{ height: "40px" }} />
              <Row style={{ "margin-bottom": "20" }}>
                <p style={this.parastyle1}>
                  <Container>
                    Upload your notes onto eduGraph, we run semantic analysis to
                    organize these notes according to the most important
                    categories.
                  </Container>
                </p>
              </Row>
              <Row style={{ height: "40px" }} />
              <Row style={{ "margin-bottom": "20" }}>
                <p style={this.parastyle1}>
                  <Container>
                    EduGraph also tracks your attention at different levels
                    during studying, we have a chrome extension which betters
                    your study session. We use the camera and chrome urls to
                    track how, productive you are while studying
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
