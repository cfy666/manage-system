import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import LoginService from 'services/Login';

import Header from 'components/Index/Header';

const loginService = new LoginService();

export default class IndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  async loginCheck () {
    const result = await loginService.loginCheck();

    const errorCode = result.error_code,
          { history } = this.props;

    if (errorCode === 10006) {
      history.push('/login');
      return;
    }
  }

  componentDidMount () {
    this.loginCheck();
  }

  render () {
    const { children, history } = this.props;
    return (
      <div className="container">
        <Header history={ history }></Header>
      </div>
    )
  }
}