import React, { createRef } from "react";
import { Redirect } from "react-router-dom";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.nodeData = {
      nodes: [
        {
          id: "topic 1",
          val: 1,
          color: "red"
        },
        {
          id: "topic 2",
          val: 10,
          color: "blue"
        }
      ],
      links: [
        {
          source: "topic 1",
          target: "topic 2",
          color: "#000000"
        }
      ]
    };
  }

  handleClick = node => {
    if (node) {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      this.fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    }
    if (this.prevClicked === node) {
      this.setState({
        redirect: node,
        currentlyHovered: false,
        zoom: 10,
        fontSize: 10
      });
    } else {
      this.prevClicked = node;
    }
  };

  fgRef = createRef();

  handleHover = node => {};

  render() {
    console.log("fgRef", this.fgRef);
    return (
      <div>
        <ForceGraph3D
          width={this.props.width}
          height={this.props.height}
          backgroundColor="white"
          graphData={this.nodeData}
          onNodeClick={this.handleClick}
          onNodeHover={this.handleHover}
          ref={this.fgRef}
          nodeThreeObject={node => {
            const sprite = new SpriteText(node.id);
            sprite.color = node.color;
            sprite.textHeight = 8;
            return sprite;
          }}
          linkWidth={1}
        />
        {this.state.redirect ? <Redirect to="/temp"></Redirect> : " "}
      </div>
    );
  }
}

export default App;
