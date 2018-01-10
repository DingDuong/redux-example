const DEFAULT_STATE = {
  todos: []
};

export default function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      let todos = [...state.todos, action.task];
      return Object.assign({}, state, { todos });
    default:
      return { ...state };
  }
}
