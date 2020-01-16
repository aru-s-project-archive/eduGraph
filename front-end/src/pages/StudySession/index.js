import React from "react";
import Navbar from "../../globalComponents/Navbar";
import StudySessionBubble from "./components/StudySessionBubble";
import { Container } from "react-bootstrap";

class StudySession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor mi, feugiat sit amet dui sit amet, maximus consectetur urna. Proin lacinia libero non tellus lobortis laoreet. Vivamus felis ligula, auctor in laoreet vel, commodo id orci. Duis tempor nibh risus, vel vestibulum nisl gravida non. Praesent in iaculis sem, sit amet laoreet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida dignissim arcu nec feugiat. Pellentesque interdum ligula vel lectus euismod, sed bibendum elit elementum."
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: "10%" }}>
          <StudySessionBubble
            class="vertical-center"
            title="Ready to start studying?"
            description={this.state.description}
          />
        </Container>
      </div>
    );
  }
}

export default StudySession;
