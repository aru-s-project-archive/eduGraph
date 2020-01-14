import React, { createRef} from 'react';
import {Redirect} from 'react-router-dom';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';

class App extends React.Component {


  constructor(props){

    super(props);
    
    this.state = {
      redirect:false,
      
    }

    this.nodeData = {"nodes": [ 
      { 
        "id": "Course 1",
        "val": 1,
        "color" : 'red'
      },
      { 
        "id": "Course 2",
        "val": 10 ,
        "color" : 'blue'
      }

  ],
  "links": [
      {
          "source": "Course 1",
          "target": "Course 2",
          "color" : '#ffffff'
      }
  ]
}
  }

  handleClick = (node => {
    console.log(node);
    this.setState({
      redirect: node,
      currentlyHovered:false,
      zoom : 10,
      fontSize:10
    })
  })

  fgRef = createRef();

  handleHover = (node) =>{
    if(node){

    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

    this.fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
    }
  }

  render(){
    console.log("fgRef",this.fgRef)
  return (
    <div className="App">
        <ForceGraph3D
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
          linkColor={link=>link.color = 'white'}
          
        />
      {(this.state.redirect)?<Redirect to="/temp"></Redirect> : " "}
    </div>
  );
}

}

export default App;
