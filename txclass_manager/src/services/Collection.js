import { API } from 'config/config';
import HTTP from 'utils/http';

const COLLECTION = API.COLLECTION;

export default class CollectionService extends HTTP {
  getCollectionData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: COLLECTION.GET_COLLECTION_DATA,
        success (data) {
          resolve(data);
        },
        error (data) {
          alert('网络请求失败');
        }
      })
    })
  }
}