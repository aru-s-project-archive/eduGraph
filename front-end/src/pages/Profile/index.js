import React, { Component } from "react";
import Navbar from "../../globalComponents/Navbar";
import ProfileInfo from "./components/ProfileInfoBubble";
import Attention from "./components/AttentionBubble";
import { Container } from "react-bootstrap";
import TimeTable from "../../globalComponents/TimeTableBubble";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileInfo: {
        firstName: "Romin",
        lastName: "Irani",
        jobTitleName: "Developer",
        preferredFullName: "Romin Irani",
        employeeCode: "E1",
        region: "CA",
        phoneNumber: "408-1234567",
        emailAddress: "romin.k.irani@gmail.com"
      },
      attentionInfo: {
        latest: {
          drowziness: "5",
          "productive time": "20",
          "total time spent": "50",
          "productive percentage": "40%",
          "distracting websites": "10"
        },
        average: {
          drowziness: "6",
          "productive time": "15",
          "total time spent": "60",
          "productive percentage": "25%",
          "distracting websites": "9"
        }
      }
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ "margin-top": "5%", "margin-bottom": "5%" }}>
          <ProfileInfo uploaded={false} info={this.state.profileInfo} />
          <Attention info={this.state.attentionInfo} />
          <TimeTable />
        </Container>
      </div>
    );
  }
}

export default Profile;
