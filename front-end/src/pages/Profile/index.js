import React, { Component } from "react";
import Navbar from "../../globalComponents/Navbar";
import ProfileInfo from "./components/ProfileInfoBubble";
import Attention from "./components/AttentionBubble";
import { Container } from "react-bootstrap";
// import TimeTable from "../../globalComponents/TimeTableBubble";
import UploadNotes from "../../globalComponents/UploadNotes";
import Footer from "../../globalComponents/Footer";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "R8IpJr6shgUowKN0jWDQrE5ycCE2"
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
    let details,
      scores = {};
    if (this.state.userData) {
      details = this.state.userData.details;
      if (this.state.userData.scores) {
        if (this.state.userData.scores.attention)
          scores = this.state.userData.scores.attention;
      }
    }
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
          <ProfileInfo uploaded={true} info={details} />
          <Attention scores={scores} />
          <UploadNotes />
          {/* <TimeTable /> */}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
