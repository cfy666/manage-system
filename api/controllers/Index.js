const { getCourseData } = require('../services/Course'),
      { returnInfo } = require('../libs/utils'),
      { API } = require('../config/error_config');
class Index {
  async getCourses (ctx, next) {
    const data = await getCourseData();

    ctx.body = data 
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }
}

module.exports = new Index();