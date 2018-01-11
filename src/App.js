import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import DadJokeContainer from "./DadJokeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First...a dad joke!</h1>
        <DadJokeContainer />
        <h1>See your todos!</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
