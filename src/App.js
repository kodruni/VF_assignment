import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Text from './Text';
import File from './File';
import Table from './Table';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ' '
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    // console.log("You submitted:", this.state.selectedOption);
  };

  handleFileUpload = fileUploadEvent => {
      let files = fileUploadEvent.target.files;
      // console.warn("data file", files)
      let reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload=(fileUploadEvent)=>{
        console.warn("file data", fileUploadEvent.target.result)
      }
    }

  render() {
    //add if/esle to choose either text or file, then in return add table
    const typeInfo = this.state.selectedOption;
    let display;

    if(typeInfo) {
      display = <Text input={this.state.selectedOption} handleChange={this.handleOptionChange} />;
    } else {
      display = <File input={this.state.selectedOption} handleChange={this.handleFileUpload} />;
    }

    return (
      <div>
        <Main />
        {display}
      </div>
    );
  }
}