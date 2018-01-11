export function addTodo(dispatch, task) {
  dispatch({ type: "ADD_TODO", task });
}

export function removeTodo(dispatch, id) {
  dispatch({ type: "REMOVE_TODO", id });
}

export function updateTodo(dispatch, task) {
  dispatch({ type: "UPDATE_TODO", task });
}
