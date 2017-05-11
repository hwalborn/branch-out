import React from 'react'

class Branch extends React.Component {

  componentDidMount(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(1080, 600);
    ctx.strokeStyle="brown"
    ctx.lineWidth=10;
    ctx.stroke();
  }
  render(){
    return (
      <div>
        <canvas id="myCanvas" width={window.innerWidth} height={window.innerHeight} style={{border:"1px solid #d3d3d3"}}></canvas>
        {this.props.children}
      </div>
    )

  }
}

export default Branch
