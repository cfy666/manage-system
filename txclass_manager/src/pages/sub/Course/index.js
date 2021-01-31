import React, { Component } from 'react';

import './index.scss';

import CourseService from 'services/Course';

import { getDatas } from 'utils/tool';

import { COURSE_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';

const courseService = new CourseService();


export default class Course extends Component {

  constructor (props) {
    super(props);

    this.state = {
      title: '课程管理'
    }
  }

  async getCourseData () {
    const result = await courseService.getCourseData(),
          errorCode = result.error_code,
          data = result.data,
          { history } = this.props;

          getDatas(errorCode, data, history, () => {
            console.log(data);
          })
  }

  componentDidMount () {
    this.getCourseData();
  }

  render () {
    const { title } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={ title }></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { COURSE_TH }
          ></TableHead>
        </table>
      </div>
    )
  }
}