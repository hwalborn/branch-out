import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'

import './App.css';
import ConnnectedLeaf from './components/leaf'
import Branch from './components/branch'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    let leaves = this.props.leaves.map((leaf, index) => {
      return <ConnnectedLeaf key={index} id={leaf.id} speed={leaf.speed} height={leaf.height} width={leaf.width} />
    })
    return (
      <div className="App">
        {leaves}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    leaves: state.leaves
  })
}

const connectedApp = connect(mapStateToProps)(App)

export default connectedApp;
