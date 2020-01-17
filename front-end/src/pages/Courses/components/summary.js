import React from "react";
import { Jumbotron, Row, Container } from "react-bootstrap";
import ColoredLine from "../../../globalComponents/ColoredLine";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      qs: ""
    };
  }
  makeMultipleSummaries = () => {
    let result = Object.keys(this.props.courseData.topics).map(
      (value, index) => {
        return [
          <h3>{value}</h3>,
          <p>{this.props.courseData.topics[value].summary}</p>,
          <ColoredLine color="white" />
        ];
      }
    );

    return result;
  };
  makeSingleSummary = () => {
    return [
      <h3>{this.props.topic}</h3>,
      <p>{this.props.courseData.topics[this.props.topic].summary}</p>
    ];
  };
  render() {
    var singleTopic;
    if (this.props.singleTopic) {
      singleTopic = this.props.courseData.topics[this.props.topic].summary;
    }
    return (
      <Container style={{ height: "100px", width: "100%" }}>
        {this.props.courseData ? (
          <Jumbotron
            style={{ overflow: "scroll", height: "550px", marginTop: "50px" }}
          >
            <h2>{this.props.courseData.name}</h2>
            <div>
              {this.props.singleTopic
                ? this.makeSingleSummary()
                : this.makeMultipleSummaries()}
            </div>
          </Jumbotron>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default Summary;
