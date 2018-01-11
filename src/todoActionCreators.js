export function addTodo(dispatch, task) {
  return { type: "ADD_TODO", task };
}

export function removeTodo(dispatch, id) {
  return { type: "REMOVE_TODO", id };
}

export function updateTodo(dispatch, task) {
  return { type: "UPDATE_TODO", task };
}
