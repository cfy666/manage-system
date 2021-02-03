import { API } from 'config/config';
import HTTP from 'utils/http';

const STUDENT = API.STUDENT;

export default class StudentService extends HTTP {
  getStudentData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: STUDENT.GET_STUDENT_DATA,
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