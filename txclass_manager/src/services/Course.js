import { API } from 'config/config';
import HTTP from 'utils/http';

const COURSE = API.COURSE;

export default class CourseService extends HTTP {
  getCourseData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: COURSE.GET_COURSE_DATA,
        success (data) {
          resolve(data);
        },
        error (err) {
          alert('网络请求失败');
        }
      })
    })
  }

  changeCourseField (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: COURSE.CHANGE_COURSE_FIELD,
        data,
        success (data) {
          resolve(data);
        },
        error (err) {
          alert('网络请求失败');
        }
      })
    })
  }

  changeCourseStatus (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: COURSE.CHANGE_COURSE_STATUS,
        data,
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