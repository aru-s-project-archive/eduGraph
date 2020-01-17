import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColoredLine from "../globalComponents/ColoredLine";
import "../index.css";

const Footer = () => (
  <footer className="footer">
    <Container style={{ top: "10px" }}>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Row>
            <Col />
            <Col>
              <h5>Made By</h5>
            </Col>
            <Col />
          </Row>
          <ColoredLine color="white" />
          <Row>
            <Col>
              <a
                href="https://github.com/ABHINAV112"
                style={{ "text-decoration": "none", color: "white" }}
              >
                Abhinav
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/arumugam666"
                style={{ "text-decoration": "none", color: "white" }}
              >
                Arumugum
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/mathpranay"
                style={{ "text-decoration": "none", color: "white" }}
              >
                Pranay
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/swakv"
                style={{ "text-decoration": "none", color: "white" }}
              >
                Swathi
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
