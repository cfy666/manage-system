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
}

module.exports = new Index();