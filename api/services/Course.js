const CourseModel = require('../db/models/course');

class CourseService {
  async addCourseData (data) {
    const cid = data.cid;

    const result = await CourseModel.findOne({
      where: { cid }
    });

    if (result) {
      return await CourseModel.update(data, {
        where: { cid }
      });
    } else {
      return await CourseModel.create(data);
    }
  }

  async getCourseData () {
    return await CourseModel.findAll({
      attributes: {
        exclude: ['posterUrl', 'description', 'createdAt', 'updatedAt']
      }
    });
  }

  async changeField (cid, field) {
    const ret = await CourseModel.update({ field }, {
      where: { cid }
    });

    return ret[0];
  }
}

module.exports = new CourseService();