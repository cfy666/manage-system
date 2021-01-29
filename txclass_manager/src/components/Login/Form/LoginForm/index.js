import React, { Component } from 'react';
import LoginService from 'services/Login';
import { trimSpace } from 'utils/tool'

const loginService = new LoginService();

import './index.scss';

export default class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  onInputTyping (e) {
    const id = e.target.id,
          val = e.target.value;

    this.setState({
      [id]: val
    })
  }

  async onLoginSubmit (e) {
    const { username, password } = this.state;

    if (trimSpace(username).length <= 0) {
      alert('用户名长度不正确');
      return;
    }

    if (trimSpace(password).length <= 0) {
      alert('密码长度不正确');
      return;
    }

    const result = await loginService.loginAction({
      username: trimSpace(username),
      password: trimSpace(password)
    });

    const errorCode = result.error_code,
          errorMsg = result.error_msg;

    if (errorCode !== 0) {
      alert(errorMsg + '(errorCode: ' + errorCode + ')');
      return;
    }

    const { history } = this.props;

    alert('登录成功');
    history.push('/');
  }

  render () {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <label htmlFor="username" className="iconfont icon-user"></label>
          <input
            type="text"
            id="username"
            className="login-input" 
            placeholder="管理员用户名"
            onChange = { (e) => this.onInputTyping(e) }
          />
        </div>
        <div className="input-box">
          <label htmlFor="password" className="iconfont icon-lock"></label>
          <input 
            type="password" 
            id="password" 
            className="login-input" 
            placeholder="管理员密码"
            onChange = { (e) => this.onInputTyping(e) }
          ></input>
        </div>
        <div className="input-box">
          <button 
            className="btn btn-primary"
            onClick={ (e) => this.onLoginSubmit(e) }
          >登录后台</button>
        </div>
      </div>
    )
  }
}