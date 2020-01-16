import React from "react";
class ColoredLine extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.color) {
      this.color = "#ffffff";
    } else {
      this.color = this.props.color;
    }
  }
  render() {
    return (
      <hr
        style={{
          color: this.color,
          backgroundColor: this.color,
          height: 1
        }}
      />
    );
  }
}
export default ColoredLine;
