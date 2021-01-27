const { redisGet, redisSet } = require('../libs/redisClient');
class Index {
  async index (ctx, next) {
    const sess = ctx.session;

    if (!sess.uid) {
      sess.uid = 1;
      sess.username = 'cfy';
      sess.nickname = 'haha';
      sess.gender = 'male'
    }

    // redisSet('a', 1);
    // redisSet('json', {a: 1, b: 2});
    // redisGet('txclass.sessszcIh6Xnfu15UmEvXoETdSOjnNOch1-3').then(res => {
    //   console.log(res);
    // })

    ctx.body = {
      session: sess
    }
    
    // await ctx.render('index');
  }
}

module.exports = new Index();