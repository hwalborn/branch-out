import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'

import './App.css';
import Leaf from './components/leaf'
import Branch from './components/branch'

class App extends Component {
  render() {
    let randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let leaves = []
    for(var i = 0; i < 400; i++){
      leaves.push(<Leaf key={i} speed={randomNum(3, 15)} />)
    }
    return (
      <div className="App">
        <h1>{this.props.greetings}</h1>
        {leaves}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    greetings: state.greetings
  })
}

const connectedApp = connect(mapStateToProps)(App)

export default connectedApp;
