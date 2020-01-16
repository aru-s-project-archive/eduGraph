import React from "react";
import {
  Navbar,
  Button,
  Dropdown,
  DropdownButton,
  Container,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../resources/account_circle-24px.svg";

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      linkBlack: {
        textDecoration: "none",
        color: "black"
      },
      linkWhite: {
        textDecoration: "none",
        color: "white"
      },
      mystyle: {
        fontSize: "2rem",
        fontFamily: "ChalkboardSE-Bold",
        textDecoration: "none",
        color: "black"
      }
    };
  }
  render() {
    return (
      <div>
        <Navbar style={{ background: "#e9ecef" }} sticky="top">
          <Container>
            <Col xs={2}>
              <Navbar.Brand>
                <Link to="./dashboard" style={this.classes.mystyle}>
                  EduGraph
                </Link>
              </Navbar.Brand>
            </Col>

            <Col xs={1}>
              <Button variant="info">
                <Link to="./notes" style={this.classes.linkWhite}>
                  Notes
                </Link>
              </Button>
            </Col>
            <Col xs={1}>
              <Button variant="info">
                <Link style={this.classes.linkWhite} to="./courses">
                  Courses
                </Link>
              </Button>
            </Col>
            <Col />
            <Col xs={1}>
              <Button variant="danger">
                <Link to="/session" style={this.classes.linkWhite}>
                  Start Session
                </Link>
              </Button>
            </Col>
            <Col xs={1} />
            <Col xs={1}>
              <DropdownButton variant="light" title={<ProfileIcon />}>
                <Dropdown.Item>
                  <Link style={this.classes.linkBlack} to="./profile">
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="">
                  <Link style={this.classes.linkBlack} to="./">
                    Logout
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar;
