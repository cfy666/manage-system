import React, { Component } from 'react';

import './index.scss';

import CourseService from 'services/Course';

import { getDatas } from 'utils/tool';

import { COURSE_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

const courseService = new CourseService();


export default class Course extends Component {

  constructor (props) {
    super(props);

    this.state = {
      title: '课程管理',
      courseData: [],
      fieldData: []
    }
  }

  async getCourseData () {
    const result = await courseService.getCourseData(),
          errorCode = result.error_code,
          data = result.data,
          { history } = this.props;

          getDatas(errorCode, data, history, () => {
           const { courseData, fieldData } = data;

           courseData.forEach((cItem, cIndex) => {
             if (cItem.field === 0) {
               cItem.fieldTitle = '无分类';
             }

             fieldData.forEach((fItem, fIndex) => {
               if (cItem.field === fItem.id) {
                 cItem.fieldTitle = fItem.title;
               }
             })
           })

           this.setState({
             courseData,
             fieldData
           })
          })
  }

  componentDidMount () {
    this.getCourseData();
  }

  render () {
    const { title, courseData } = this.state;
    return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          onRefreshData= { this.getCourseData.bind(this) }
        ></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { COURSE_TH }
          ></TableHead>
          <TableBody
            courseData = { courseData }
          ></TableBody>
        </table>
      </div>
    )
  }
}