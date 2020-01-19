import React, { Component } from 'react';

export default class File extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      <form method="post" onSubmit={this.props.fileUpload}>
        <p>Upload your file</p>
        <input type="file" name="file" onChange={this.props.handleFileUpload} />
      </form>
      </div>
    );
  }
}
