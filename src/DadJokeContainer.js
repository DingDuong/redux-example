import React, { Component } from "react";
import { connect } from "react-redux";
import * as dadJokeFunctions from "./dadJokeActionCreators";

class DadJokeContainer extends Component {
  componentDidMount() {
    debugger;
    this.props.getDadJoke();
  }

  render() {
    return <div>{this.props.joke}</div>;
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    joke: state.joke
  };
}

export default connect(mapStateToProps, dadJokeFunctions)(DadJokeContainer);
