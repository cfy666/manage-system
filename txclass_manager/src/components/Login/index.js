import React, { Component } from 'react';

import axios from 'axios';

import './index.scss';

import Logo from './Logo';
import Form from './Form';
export default class Login extends Component {

  getCourseData () {
    axios({
      url: 'http://localhost:3000/admin/login_action',
      method: 'post',
      data: {
        password: 'admin',
        username: 'admin'
      }
    }).then((res) => {
      console.log(res.data);
    })
  }

  componentDidMount () {
    this.getCourseData();
  }

  render () {
    return (
      <div className="login-container">
        <Logo />
        <Form />
      </div>
    )
  }
}