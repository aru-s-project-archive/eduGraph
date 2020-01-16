import React, { PureComponent } from "react";
import Navbar from "../../globalComponents/Navbar";
import { Row, Col } from "react-bootstrap";
import Menu from "./components/menu";
import Graph from "./components/graph";
import Summary from "./components/summary";

class Courses extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      view: "knowledgeGraph",
      userId: "R8IpJr6shgUowKN0jWDQrE5ycCE2",
      userData: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.setView = this.setView.bind(this);
    this.setCourse = this.setCourse.bind(this);

    if (props.location.state) {
      this.state.course = props.location.state.course;
    }
  }
  setCourse = course => {
    this.setState({
      course: course
    });
  };
  setView = view => {
    this.setState({
      view: view
    });
  };
  componentDidMount = async () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({
      userData: await (
        await fetch(
          `https://us-central1-edugraph-78964.cloudfunctions.net/app/user/${this.state.userId}`
        )
      ).json(),
      courseData: await (
        await fetch(
          `https://us-central1-edugraph-78964.cloudfunctions.net/app/user/allCourses/${this.state.userId}`
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
    var selectedCourseData;
    if (this.state.courseData) {
      selectedCourseData = this.state.courseData[this.state.course];
    }
    return (
      <div style={this.classes().main}>
        <Navbar />
        <Row style={{ width: "100%", height: "100%" }}>
          <Col xs={4} style={{ height: "90%", width: "33%" }}>
            <Menu
              setView={this.setView}
              setCourse={this.setCourse}
              style={{ "margin-bottom": "100px" }}
              courses={this.state.userData.currCourse}
            />
          </Col>
          <Col>
            {this.state.view === "knowledgeGraph" ? (
              <Graph
                width={0.64582 * this.state.width}
                height={0.9 * this.state.height}
                style={{ marginLeft: 0 }}
                course={selectedCourseData}
              />
            ) : (
              <Summary />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Courses;
