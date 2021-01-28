import React, { Component } from 'react';

import './index.scss';

export default class LoginForm extends Component {
  render () {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <label htmlFor="username" className="iconfont icon-user"></label>
          <input type="text" id="username" className="login-input" placeholder="管理员用户名" />
        </div>
        <div className="input-box">
          <label htmlFor="password" className="iconfont icon-lock"></label>
          <input type="password" id="password" className="login-input" placeholder="管理员密码"></input>
        </div>
        <div className="input-box">
          <button className="btn btn-primary">登录后台</button>
        </div>
      </div>
    )
  }
}