import React, { Component } from 'react';

import './index.scss';

import Title from './Title';
import LoginForm from './LoginForm';

export default class Form extends Component {
  render () {
    return (
      <div className="form-wrapper">
        <Title />
        <LoginForm />
      </div>
    )
  }
} 