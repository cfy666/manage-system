const { getCourseData, changeField, changeStatus } = require('../services/Course'),
      { getCourseFieldData } = require('../services/CourseTab'),
      { getRecomCourseData, changeRecomCourseStatus } = require('../services/RecomCourse'),
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

  async getRecomCourses (ctx, next) {
    const data = await getRecomCourseData();

    ctx.body = data
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async changeCourseField (ctx, next) {
    const { cid, field } = ctx.request.body;

    const result = await changeField(cid, field);

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_COURSE_FIELD_FAILD);
      return;
    }

    ctx.body = returnInfo(API.CHANGE_COURSE_FIELD_SUCCESS);
  }

  async changeCourseStatus (ctx, next) {
    const { cid, status } = ctx.request.body;

    const result = await changeStatus(cid, status);

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_COURSE_STATUS_FAILD);
      return;
    }

    ctx.body = returnInfo(API.CHANGE_COURSE_STATUS_SUCCESS);
  }

  async changeRecomCourseStatus (ctx, next) {
    const { cid, status } = ctx.request.body;

    const result = await changeRecomCourseStatus(cid, status);

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_RECOM_COURSE_STATUS_FAILD);
      return;
    }

    ctx.body = returnInfo(API.CHANGE_RECOM_COURSE_STATUS_SUCCESS);
  }
}

module.exports = new Index();