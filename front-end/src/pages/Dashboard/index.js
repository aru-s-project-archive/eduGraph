import React, { Component } from "react";
import Navbar from "../../globalComponents/Navbar";
import TimeTableBubble from "../../globalComponents/TimeTableBubble";
import CoursesBubble from "../../globalComponents/CoursesBubble";
import { Container } from "react-bootstrap";
import NotesBubble from "../../globalComponents/NotesBubble";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container class="margin">
          <NotesBubble />
          <CoursesBubble />
          <TimeTableBubble />
        </Container>
      </div>
    );
  }
}

export default Dashboard;
