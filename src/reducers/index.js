const manageState = (state={leaves: []}, action) => {
  switch (action.type) {
    case "CHANGE_POSITION":
      return {greetings: "goodbye"}
    case "UPDATE_LEAF":
      return Object.assign({}, state, {leaves: state.leaves.map((leaf) => {
        if(leaf.id === action.payload){
          return Object.assign({}, leaf, {speed: leaf.speed / 5})
        }else{
          return leaf
        }
      })})
      case "MAKE_DEFAULT":
      return Object.assign({}, state, {leaves: state.leaves.map((leaf) => {
        if(leaf.id === action.payload){
          return Object.assign({}, leaf, {speed: (Math.random() * (15 - 3)) + 3})
        }else{
          return leaf
        }
      })})
    default:
      return state
  }
}

export default manageState
