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
      this.props.setTopic(node.id, this.props.courseId);
      this.props.setSingleTopic(true);
      this.props.setView("summary");
    } else {
      this.prevClicked = node;
    }
  };

  fgRef = createRef();

  makeNodeData = courseTopics => {
    if (!courseTopics) {
      return { nodes: [], links: [] };
    }
    var nodeData = { nodes: [], links: [] };
    for (var topic in courseTopics.topics) {
      nodeData.nodes.push({
        id: topic,
        val: 1,
        color: "red"
      });
    }
    for (var topic in courseTopics.topics) {
      let i = 0;
      for (var link in courseTopics.topics[topic].links) {
        if (i === 5) break;
        let currTarget = link.split("/")[1];
        nodeData.links.push({
          source: topic,
          target: currTarget
        });
        i++;
      }
    }
    return nodeData;
  };

  render() {
    return (
      <ForceGraph3D
        width={this.props.width}
        height={this.props.height}
        backgroundColor="white"
        graphData={this.makeNodeData(this.props.course)}
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
    );
  }
}

export default App;
