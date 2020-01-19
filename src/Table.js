import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Name: </h1>{this.props.name}
        <p>Credit: </p>{this.props.credit}
        <p>Last update: </p>{this.props.last_tud}
      </div>
    )
  }
}

//logic from App should be here, and the main App should only have User component?