import React, { PureComponent } from "react";
import Navbar from "../../globalComponents/Navbar";
import { Row, Col } from "react-bootstrap";
import Menu from "./components/menu";

class Courses extends PureComponent {
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
    console.log("window dimensions", this.state);
    return (
      <div
        style={{
          width: this.state.width,
          height: this.state.height,
          overflow: "hidden"
        }}
      >
        <Navbar />
        <Row style={{ width: "100%", height: "100%" }}>
          <Col xs={4}>
            {/* put the menu and navigation here */}
            <Menu />
          </Col>
          <Col style={{ background: "#ff0000" }}>
            {/* put the visualization and summary and all that crap here */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Courses;
