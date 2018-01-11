import React, { Component } from "react";
import { connect } from "react-redux";
import * as myFunctions from "./todoActionCreators";

class TodoList extends Component {
  render() {
    let todos = this.props.todos.map(v => <h2>{v}</h2>);
    return <div>{todos}</div>;
  }
}

// Where does Provider get state from the store!
// Provider gives me state in the function below!
function mapStateToProps(state) {
  debugger;
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, myFunctions)(TodoList);
