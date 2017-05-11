const manageState = (state={greetings: "hello"}, action) => {
  switch (action.type) {
    case "CHANGE_POSITION":
      return {greetings: "goodbye"}
    default:
      return state
  }
}

export default manageState
