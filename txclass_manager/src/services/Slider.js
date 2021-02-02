import { API } from 'config/config';
import HTTP from 'utils/http';

const SLIDER = API.SLIDER;

export default class SliderService extends HTTP {
  getSliderData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: SLIDER.GET_SLIDER_DATA,
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