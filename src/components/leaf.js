import React from 'react'
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'

import { handleMouseOver, makeDefault } from '../actions'

class Leaf extends React.Component {
  constructor(){
    super()
    this.handleMouse = this.handleMouse.bind(this)
  }

  handleMouse(){
    this.props.handleMouseOver(this.props.id)
    setTimeout(() => {this.props.makeDefault(this.props.id)}, 5000)
  }

  render(){
    let randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return (
      <div onMouseOver={this.handleMouse} className="leaf" style={{animation: `my-move ${this.props.speed}s infinite`, marginTop: this.props.height, marginLeft: this.props.width}}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    leaves: state.leaves
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleMouseOver: handleMouseOver,
    makeDefault: makeDefault
  }, dispatch)
}

const ConnectedLeaf = connect(mapStateToProps, mapDispatchToProps)(Leaf)

export default ConnectedLeaf
