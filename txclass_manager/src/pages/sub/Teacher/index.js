import React, { Component } from 'react';

import './index.scss';

import { getDatas, confirmText } from 'utils/tool';

import { TEACHER_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import TeacherService from 'services/Teacher';
import CommonService from 'services/Common';

const teacherService = new TeacherService();
const commonService = new CommonService();
const cfmStarText = confirmText('STAR_TEACHER');
const cfmTeacherText = confirmText('TEACHER');


export default class Teacher extends Component {

  constructor () {
    super();
    this.state = {
      title: '老师管理',
      teacherData: []
    }
  }

  async getTeacherData () {
    const result = await teacherService.getTeacherData(),
          errorCode = result.error_code,
          data = result.data,
          { history } = this.props;

          getDatas(errorCode, data, history, () => {
    
           this.setState({
             teacherData: data
           })
          });
  }

  async onStatusClick (id, index) {
    const { teacherData } = this.state,
          status = teacherData[index].status,
          text = cfmTeacherText(status);


    const cfm = window.confirm(text);

    if (!cfm) {
      return;
    }

    switch (status) {
      case 1:
        teacherData[index].status = 0;
        break;
      case 0:
        teacherData[index].status = 1;
        break;
      default:
        break;
    }

    this.setState({
      teacherData
    }, async () => {
      const result = await commonService.changeStatus({
        id,
        status: teacherData[index].status,
        field: 'TEACHER'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const status = teacherData[index].status;
        alert(
          status ? '该老师上线失败' : '该老师下线失败'
        )
        return;
      }
    })
  }

  async onStarClick (id, index) {
    const { teacherData } = this.state,
          isStar = teacherData[index].isStar,
          text = cfmStarText(isStar);


    const cfm = window.confirm(text);

    if (!cfm) {
      return;
    }

    switch (isStar) {
      case 1:
        teacherData[index].isStar = 0;
        break;
      case 0:
        teacherData[index].isStar = 1;
        break;
      default:
        break;
    }

    this.setState({
      teacherData
    }, async () => {
      const result = await teacherService.selectStarTeacher({
        id,
        isStar: teacherData[index].isStar,
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const isStar = teacherData[index].isStar;
        alert(
          isStar ? '设置该老师为明星老师失败' : '设置该老师为非明星老师失败'
        )
        return;
      }
    })
  }

  componentDidMount () {
    this.getTeacherData();
  }


  render () {
    const { title, teacherData } = this.state;
    return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          onRefreshData= { this.getTeacherData.bind(this) }
        ></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { TEACHER_TH }
          ></TableHead>
          <TableBody
            teacherData={ teacherData }
            onStatusClick={ this.onStatusClick.bind(this) }
            onStarClick={ this.onStarClick.bind(this) }
          ></TableBody>
        </table>
      </div>
    )
  }
}