const { getCourses } = require('../services/Course');
class Index {
  async index (ctx, next) {
    const sess = ctx.session;

    if (!sess.uid) {
      sess.uid = 1;
      sess.username = 'cfy';
      sess.nickname = 'haha';
      sess.gender = 'male'
    }

    ctx.body = {
      session: sess
    }
    
    // await ctx.render('index');
  }

  async getCourseData (ctx, next) {
    return ctx.body = await getCourses();
  }
}

module.exports = new Index();