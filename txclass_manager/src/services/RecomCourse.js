import { API } from 'config/config';
import HTTP from 'utils/http';

const RECOM_COURSE = API.RECOM_COURSE;

export default class RecomCourseService extends HTTP {
  getRecomCourseData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: RECOM_COURSE.GET_RECOM_COURSE_DATA,
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