import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    let todos = this.props.todos.map(v => <h2>{v}</h2>);
    return <div>{todos}</div>;
  }
}

// Where does Provider get state from the store!
// Provider gives me state in the function below!
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
