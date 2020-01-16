import React, { PureComponent } from "react";
import Navbar from "../globalComponents/Navbar";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NotFound extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div style={{ height: this.state.height, width: this.state.width }}>
        <Navbar />
        <Card
          style={{
            width: "18rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-75%)"
          }}
        >
          <Card.Body>
            <Card.Title>Error 404</Card.Title>
            <Card.Text>
              Looks like the page you're looking for doesn't exist
            </Card.Text>

            <Button variant="danger">
              <Link
                to="./dashboard"
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
              >
                Go Home
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NotFound;
