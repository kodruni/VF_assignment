import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <header className="App-header">
          <h1>Submit your info here</h1>
          <label>
            <input
              type="radio"
              name="options"
              value={this.props.selectedOption === "option1"}
              onChange={this.props.handleOptionChange}
            />
            Type your info
          </label>
          <label>
            <input
              type="radio"
              name="options"
              value={this.props.selectedOption === "option2"}
              onChange={this.props.handleOptionChange}
            />
            Upload a file
          </label>
        </header>
      </form>
    )
  }
}
