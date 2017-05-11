import React from 'react'

const Leaf = ({speed}) => {
  let randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <div className="leaf" style={{animation: `my-move ${speed}s infinite`, marginTop: randomNum(0, window.innerHeight), marginLeft: randomNum(0, window.innerWidth)}}></div>
  )
}

export default Leaf
