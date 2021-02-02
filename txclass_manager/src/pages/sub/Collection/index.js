import React, { Component } from 'react';

import './index.scss';

import { getDatas } from 'utils/tool';

import { COLLECTION_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import CollectionService from 'services/Collection';
import CommonService from 'services/Common';

const collectionService = new CollectionService();
const commonService = new CommonService();


export default class Collection extends Component {

  constructor () {
    super();
    this.state = {
      title: '课程集合管理',
      collectionData: []
    }
  }

  async getCollectionData () {
    const result = await collectionService.getCollectionData(),
          errorCode = result.error_code,
          data = result.data,
          { history } = this.props;

          getDatas(errorCode, data, history, () => {
    
           this.setState({
             collectionData: data
           })
          });
  }

  async onStatusClick (id, index) {
    const { collectionData } = this.state,
          status = collectionData[index].status;


    const cfm = window.confirm(`确认要${ status ? '下架' : '上架'}该集合吗？`);

    if (!cfm) {
      return;
    }

    switch (status) {
      case 1:
        collectionData[index].status = 0;
        break;
      case 0:
        collectionData[index].status = 1;
        break;
      default:
        break;
    }

    this.setState({
      collectionData
    }, async () => {
      const result = await commonService.changeStatus({
        id,
        status: collectionData[index].status,
        field: 'COLLECTION'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const status = this.state.recomCourseData[index].status;
        alert(
          status ? '该集合上架失败' : '该集合下架失败'
        )
        return;
      }
    })
  }

  componentDidMount () {
    this.getCollectionData();
  }


  render () {
    const { title, collectionData } = this.state;
    return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          onRefreshData= { this.getCollectionData.bind(this) }
        ></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { COLLECTION_TH }
          ></TableHead>
          <TableBody
            collectionData = { collectionData }
            onStatusClick= { this.onStatusClick.bind(this) }
          ></TableBody>
        </table>
      </div>
    )
  }
}