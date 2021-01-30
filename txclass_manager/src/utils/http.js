import axios from 'axios';
import qs from 'qs';

export default class HTTP {
  axiosPost (options) {
    axios ({
      url: options.url,
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    }).then(res => {
      options.success(res.data);
    }).catch(error => {
      options.error(error);
    })
  }
  axiosGet (options) {
    axios ({
      url: options.url,
      method: 'get',
      withCredentials: true,
    }).then(res => {
      options.success(res.data);
    }).catch(error => {
      options.error(error);
    })
  }
}