import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import LoginService from 'services/Login';
import CourseService from 'services/Course';

import Header from 'components/Index/Header';
import SideBar from 'components/Index/SideBar';
import Container from 'components/Index/Container';

import { NAV } from '../config/config';

const loginService = new LoginService();
const courseService = new CourseService();

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

    history.push('/course');
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
    courseService.getCourseData().then (res => {
      const errorCode = res.error_code;

      if (errorCode === 1006) {
        const { history } = this.props;
        history.push('/login');
        return;
      }

      if (errorCode === 20001) {
        alert('获取数据失败，请检查网络状况');
        return;
      }

      const data = res.data;
      console.log(data);
    })
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
        <Container
          children={ children }
        ></Container>
      </div>
    )
  }
}