import { combineReducers } from 'redux';

const todo = (state = [], action) => {
  switch (action.type) {
    case 'TODO_LIST_ADD':
      return [
        ...state,
        action.record
      ]
    case 'TODO_LIST_REMOVE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
    return [];
  }
}
export default combineReducers({
  todo
})
