import React, { Component } from 'react';

export default class Form extends Component {
  
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <label>Enter info here:
        <br/>
          <textarea value={this.props.input} onChange={this.props.handleChange}/>
        </label>
        <br/>
        <button type='submit' value='submit'>Submit</button>
      </form>
      <p>You entered: {this.props.handleSubmit} </p> 
      </div>
    );
  }
}
