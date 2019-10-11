import React, { Component } from "react";

import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import "./App.css";
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { getSmurfs }
)(App);
