import React from 'react';
import {Redirect} from 'react-router-dom';
import ForceGraph2D from 'react-force-graph-2d';

class App extends React.Component {

  handleClick = (node => {
    console.log(node);
    this.setState({
      redirect: node,
      currentlyHovered:false,
      zoom : 10,
      fontSize:10
    })
  })

  handleNodeHover = (node) =>{
    console.log(node);
    if(node){
      this.currentlyHovered=node;
      this.prevColour = node.color;
      node.color = "#000000";
      
      this.setState({
        zoom:100,
        fontSize : 20
      })
      //console.log("zoom",zoom)
      console.log(this.state.zoom)
    }else{
      this.currentlyHovered.color = this.prevColour;
      this.currentlyHovered = false;
      this.setState({
        zoom:10,
        fontSize:10
      })
      console.log(this.state.zoom)

    }
    console.log(this.state.currentlyHovered)
  }

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
          "target": "Course 2"
      }
  ]
}
  }
  // constructor for graph
  nodeCanvasObjectCallback = (node, ctx, globalScale) => {
    const label = node.id;
    // const fontSize = 12/globalScale;
    const fontSize = this.state.fontSize;
    ctx.font = `${fontSize}px Sans-Serif`;
    const textWidth = ctx.measureText(label).width;
    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = node.color;
    
    ctx.fillText(label, node.x, node.y);

    
  }

  render(){

  return (
    <div className="App">
        <ForceGraph2D
          graphData={this.nodeData}
          nodeCanvasObject={this.nodeCanvasObjectCallback}
          onNodeClick={this.handleClick}
          onNodeHover={this.handleNodeHover}

          

          zoom={this.state.zoom}
          centerAt={100,100}
        />
      {(this.state.redirect)?<Redirect to="/temp"></Redirect> : " "}
    </div>
  );
}

}

export default App;
