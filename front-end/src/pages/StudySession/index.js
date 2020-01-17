import React from "react";
import Navbar from "../../globalComponents/Navbar";
import StudySessionBubble from "./components/StudySessionBubble";
import { Container } from "react-bootstrap";
import Footer from "../../globalComponents/Footer";

class StudySession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description:
        "Our immersive study session, experience helps us track your study methods. While giving a clear description of what is going right and wrong!"
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
