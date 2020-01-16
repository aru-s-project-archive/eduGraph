import React from "react";
import {
  Navbar,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Container,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../icons/account_circle-24px.svg";

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: false };
    this.classes = {
      linkBlack: {
        textDecoration: "none",
        color: "black"
      },
      linkWhite: {
        textDecoration: "none",
        color: "white"
      }
    };
  }
  render() {
    return (
      <Dropdown as={ButtonGroup}>
        <Button
          variant={this.props.variant ? this.props.variant : "info"}
          disabled={this.props.disabled}
        >
          <Link to={this.props["main-link"]} style={this.classes.linkWhite}>
            {this.props.name}
          </Link>
        </Button>
        <Dropdown.Toggle
          split
          variant={this.props.variant ? this.props.variant : "info"}
          id="dropdown-split-basic"
        />
        <Dropdown.Menu>
          {this.props.options.map((val, index) => {
            return (
              <Dropdown.Item>
                <Link style={this.classes.linkBlack} to={val.link}>
                  {val.name}
                </Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

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
                <Link to="./dashboard" style={this.classes.linkBlack}>
                  EduGraph
                </Link>
              </Navbar.Brand>
            </Col>

            <Col xs={1}>
              <Button variant="info">Notes</Button>
            </Col>
            <Col xs={1}>
              <CustomDropdown
                name="Courses"
                main-link="./courses"
                options={[
                  { name: "Knowledge Graphs", link: "./courses" },
                  { name: "Summary", link: "./courses" },
                  { name: "Questions", link: "./courses" }
                ]}
              />
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
                <Dropdown.Item href="">Logout</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar;
