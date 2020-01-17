import React, { Component } from "react";
import Navbar from "../../globalComponents/Navbar";
// import TimeTableBubble from "../../globalComponents/TimeTableBubble";
import CoursesBubble from "../../globalComponents/CoursesBubble";
import { Container } from "react-bootstrap";
import NotesBubble from "../../globalComponents/NotesBubble";
import Footer from "../../globalComponents/Footer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "R8IpJr6shgUowKN0jWDQrE5ycCE2",
      userData: false
    };
  }

  componentDidMount = async () => {
    this.setState({
      userData: await (
        await fetch(
          `https://us-central1-edugraph-78964.cloudfunctions.net/app/user/${this.state.userId}`
        )
      ).json()
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container class="margin">
          <NotesBubble notes={this.state.userData.notes} />
          <CoursesBubble courseData={this.state.userData.currCourse} />
          {/* <TimeTableBubble /> */}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
