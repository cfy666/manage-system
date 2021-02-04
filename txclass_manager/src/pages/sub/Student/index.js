import React, { Component } from 'react';

import './index.scss';

import { getDatas, confirmText } from 'utils/tool';

import { STUDENT_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import StudentService from 'services/Student';
import CommonService from 'services/Common';
const cfmText = confirmText('STUDENT');

const studentService = new StudentService();
const commonService = new CommonService();


export default class Student extends Component {

  constructor () {
    super();
    this.state = {
      title: '学生管理',
      studentData: []
    }
  }

  async getStudentData () {
    const result = await studentService.getStudentData(),
          errorCode = result.error_code,
          data = result.data,
          { history } = this.props;

          getDatas(errorCode, data, history, () => {
    
           this.setState({
             studentData: data
           })
          });
  }

  async onStatusClick (id, index) {
    const { studentData } = this.state,
          status = studentData[index].status,
          text = cfmText(status);


    const cfm = window.confirm(text);

    if (!cfm) {
      return;
    }

    switch (status) {
      case 1:
        studentData[index].status = 0;
        break;
      case 0:
        studentData[index].status = 1;
        break;
      default:
        break;
    }

    this.setState({
      studentData
    }, async () => {
      const result = await commonService.changeStatus({
        id,
        status: studentData[index].status,
        field: 'STUDENT'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const status = studentData[index].status;
        alert(
          status ? '该学生上线失败' : '该学生下线失败'
        )
        return;
      }
    })
  }

  componentDidMount () {
    this.getStudentData();
  }


  render () {
    const { title, studentData } = this.state;
    return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          onRefreshData= { this.getStudentData.bind(this) }
        ></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { STUDENT_TH }
          ></TableHead>
          <TableBody
            studentData = { studentData }
            onStatusClick= { this.onStatusClick.bind(this) }
          ></TableBody>
        </table>
      </div>
    )
  }
}