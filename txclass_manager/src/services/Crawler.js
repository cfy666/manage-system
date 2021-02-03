import HTTP from 'utils/http';
import { API } from '../config/config';

const CRAWLER = API.CRAWLER;

export default class CrawlerService extends HTTP {
  crawlAction (field) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: CRAWLER.CRAWL_ACTION,
        data: {
          field
        },
        success (data) {
          resolve(data);
        },
        error (err) {
          alert('网络请求失败');
        }
      })
    })
  }
}