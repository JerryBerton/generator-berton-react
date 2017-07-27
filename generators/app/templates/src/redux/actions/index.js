export const add = (record) => {
  return {
    type: 'TODO_LIST_ADD',
    record
  }
}
export const remove = (index) => {
  return {
    type: 'TODO_LIST_REMOVE',
    index
  }
}
