export const add = (text) => {
  return {
    type: 'TODO_LIST_ADD',
    text
  }
}
export const remove = (index) => {
  return {
    type: 'TODO_LIST_REMOVE',
    index
  }
}
