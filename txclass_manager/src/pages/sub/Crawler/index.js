import React, { Component } from 'react';

import './index.scss';

import { CRAWLER_TH } from 'config/table_config';
import crawlerData from 'config/crawler_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';


import CrawlerService from 'services/Crawler';

const crawlerService = new CrawlerService();


export default class Crawler extends Component {

  constructor () {
    super();
    this.state = {
      title: '数据爬虫管理',
      crawlerData
    }
  }

  onCrawlClick (apiName, index) {
    const { crawlerData } = this.state,
          loading = crawlerData[index].loading

    crawlerData[index].loading = !loading;
    this.setState({
        crawlerData
    }, async() => {
      const result = await crawlerService.crawlAction(apiName);

      console.log(result);

      crawlerData[index].loading = !this.state.crawlerData[index].loading;
      this.setState({
        crawlerData
      })

    })

  }

  render () {
    const { title, crawlerData } = this.state;
    return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          
        ></ListTitle>
        <table className="list-table">
          <TableHead 
            thData= { CRAWLER_TH }
          ></TableHead>
          <TableBody
            crawlerData={ crawlerData }
            onCrawlClick= { this.onCrawlClick.bind(this) }
          ></TableBody>
        </table>
      </div>
    )
  }
}