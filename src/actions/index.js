export const handleMouseOver = (id) => {
  return {
    type: "UPDATE_LEAF",
    payload: id
  }
}

export const makeDefault = (id) => {
  return {
    type: "MAKE_DEFAULT",
    payload: id
  }
}
