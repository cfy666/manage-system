import React, { Component } from 'react';

import './index.scss';

import CourseService from 'services/Course';
import CommonService from 'services/Common';

import { getDatas, confirmText } from 'utils/tool';

import { COURSE_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

const courseService = new CourseService();
const commonService = new CommonService();
const cfmText = confirmText('COURSE');


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

  async onSelectChange (data, cid, index) {
    const { courseData } = this.state;
    courseData[index].field = data.id;
    courseData[index].fieldTitle = data.title;

    this.setState({
      courseData
    });

    const result = await courseService.changeCourseField({
      cid,
      field: data.id
    })

    const errorCode = result.error_code;

    if (errorCode !== 0) {
      alert('修改课程分类失败');
      return;
    }
  }

  async onStatusClick (cid, index) {
    const { courseData } = this.state,
          status = courseData[index].status,
          text = cfmText(status);


    const cfm = window.confirm(text);

    if (!cfm) {
      return;
    }

    switch (status) {
      case 1:
        courseData[index].status = 0;
        break;
      case 0:
        courseData[index].status = 1;
        break;
      default:
        break;
    }

    this.setState({
      courseData
    }, async () => {
      const result = await commonService.changeStatus({
        id: cid,
        status: courseData[index].status,
        field: 'COURSE'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const status = courseData[index].status;
        alert(
          status ? '该课程上架失败' : '该课程下架失败'
        )
        return;
      }
    })
  }

  componentDidMount () {
    this.getCourseData();
  }

  render () {
    const { title, courseData, fieldData } = this.state;
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
            fieldData = { fieldData }
            onSelectChange={ this.onSelectChange.bind(this)}
            onStatusClick= { this.onStatusClick.bind(this) }
          ></TableBody>
        </table>
      </div>
    )
  }
}