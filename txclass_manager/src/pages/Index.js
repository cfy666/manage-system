import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import LoginService from 'services/Login';

import Header from 'components/Index/Header';
import SideBar from 'components/Index/SideBar';

import { NAV } from '../config/config';

const loginService = new LoginService();

export default class IndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      curIdx: 0,
      field: NAV[0].field,
      title: NAV[0].title
    }
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

  onNavItemClick (dataItem, index) {
    const { field, title } = dataItem;

    this.setState({
      field,
      title,
      curIdx: index
    })
  }

  componentDidMount () {
    this.loginCheck();
  }

  render () {
    const { children, history } = this.props,
          { curIdx } = this.state;
    return (
      <div className="container">
        <Header history={ history }></Header>
        <SideBar
          curIdx={ curIdx }
          onNavItemClick={ this.onNavItemClick.bind(this) }
        ></SideBar>
      </div>
    )
  }
}