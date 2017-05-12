import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import manageState from './reducers'
import App from './App';
import './index.css';

let num, leaves = []

if(document.documentElement.clientHeight > 800){
  num = 400
}else{
  num = 100
}

for(var i = 0; i < num; i++){
  leaves.push({
    id: i,
    speed: (Math.random() * (15 - 3)) + 3,
    height: Math.floor(Math.random() * (window.innerHeight)),
    width: Math.floor(Math.random() * (window.innerWidth))
  })
}

const defaultState={
  leaves: leaves
}

const store = createStore(manageState, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
