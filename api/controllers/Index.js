const { getCourseData } = require('../services/Course'),
      { getCourseFieldData } = require('../services/CourseTab'),
      { returnInfo } = require('../libs/utils'),
      { API } = require('../config/error_config');
class Index {
  async getCourses (ctx, next) {
    const courseData = await getCourseData(),
          fieldData = await  getCourseFieldData();

    ctx.body = courseData && fieldData
             ? returnInfo(API.RETURN_SUCCESS, {
               courseData,
               fieldData
             })
             : returnInfo(API.RETURN_FAILED);
  }
}

module.exports = new Index();