import { API } from 'config/config';
import HTTP from 'utils/http';

const TEACHER = API.TEACHER;

export default class TeacherService extends HTTP {
  getTeacherData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: TEACHER.GET_TEACHER_DATA,
        success (data) {
          resolve(data);
        },
        error (err) {
          alert('网络请求失败');
        }
      })
    })
  }

  selectStarTeacher (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: TEACHER.SELECT_STAR_TEACHER,
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