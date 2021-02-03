import React, { Component } from 'react';

import './index.scss';

import { CRAWLER_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';


import CrawlerService from 'services/Crawler';

const crawlerService = new CrawlerService();


export default class Crawler extends Component {

  constructor () {
    super();
    this.state = {
      title: '数据爬虫管理'
    }
  }

  componentDidMount () {
    crawlerService.crawlAction('crawlSliderData').then((res) => { 
      console.log(res);
    })
  }


  render () {
    const { title } = this.state;
    return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          
        ></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { CRAWLER_TH }
          ></TableHead>
        </table>
      </div>
    )
  }
}