import React, { Component } from 'react';

import Login from 'components/Login';
export default class LoginPage extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="container">
        <Login />
      </div>
    )
  }
}