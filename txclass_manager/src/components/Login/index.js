import React, { Component } from 'react';

import './index.scss';

import Logo from './Logo';
import Form from './Form';
export default class Login extends Component {
  render () {
    return (
      <div className="login-container">
        <Logo />
        <Form />
      </div>
    )
  }
}