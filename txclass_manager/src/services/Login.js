import { API } from '../config/config';
import HTTP from '../utils/http';

export default class LoginService extends HTTP {
  loginAction (userInfo) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.LOGIN_ACTION,
        data: userInfo,
        success (data) {
          resolve(data);
        },
        error (error) {
          alert('网络请求失败');
        }
      })
    })
  }

  loginCheck () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.LOGIN_CHECK,
        success (data) {
          resolve(data);
        },
        error (err) {
          alert('网络请求失败');
          window.location.reload();
        }
      })
    })
  }
}