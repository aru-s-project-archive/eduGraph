import React, { PureComponent } from "react";
import Menu from "./components/menu";
import { Row, Col } from "react-bootstrap";
import Navbar from "../../globalComponents/Navbar";

class Notes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      userData: "",
      userId: "R8IpJr6shgUowKN0jWDQrE5ycCE2"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = async () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({
      userData: await (
        await fetch(
          `https://us-central1-edugraph-78964.cloudfunctions.net/app/user/${this.state.userId}`
        )
      ).json()
    });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  classes = () => {
    return {
      main: {
        width: this.state.width,
        height: this.state.height,
        overflow: "hidden"
      }
    };
  };
  render() {
    return (
      <div style={this.classes().main}>
        <Navbar />
        <Row style={{ width: "100%", height: "100%" }}>
          <Col xs={4} style={{ height: "90%", width: "33%" }}>
            <Menu
              setView={this.setView}
              style={{ "margin-bottom": "100px" }}
              courses={this.state.userData.currCourse}
            />
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Notes;
