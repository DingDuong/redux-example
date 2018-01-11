const DEFAULT_STATE = {
  todos: [],
  joke: ""
};

export default function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "GET_DAD_JOKE":
      debugger;
      return Object.assign({}, state, { joke: action.joke });
    case "ADD_TODO":
      let todos = [...state.todos, action.task];
      return Object.assign({}, state, { todos });
    default:
      return { ...state };
  }
}
