const { adminInfo } = require('../config/config'),
      { addAdmin, login } = require('../services/Admin'),
      { makeCrypto, trimSpace, returnInfo } = require('../libs/utils'),
      { LOGIN } = require('../config/error_config');
class Admin {
  async createAdmin() {
    adminInfo.password = makeCrypto(adminInfo.password);

    const result = await addAdmin(adminInfo);

    if (result) {
      console.log(0);
    } else {
      console.log(1);
    }
  }

  async loginAction(ctx, next) {
    const { username, password } = ctx.request.body;

    if (!username || !password) {
      ctx.body = returnInfo(LOGIN.INVALID_OPERATION);
      return;
    }

    if (trimSpace(username).length <= 0) {
      ctx.body = returnInfo(LOGIN.INVALID_USERNAME_LENGTH);
      return;
    }

    if (trimSpace(password).length <= 0) {
      ctx.body = returnInfo(LOGIN.INVALID_PASSWORD_LENGTH);
      return;
    }

    const userInfo = {
      username: trimSpace(username),
      password: makeCrypto(trimSpace(password))
    }

    const result = await login(userInfo);

    if (result === 10003) {
      ctx.body = returnInfo(LOGIN.USERNAME_NOT_EXIST);
      return;
    }

    if (result === 10004) {
      ctx.body = returnInfo(LOGIN.PASSWORD_ERROR);
      return;
    }

    if (!ctx.session.userInfo) {
      ctx.session.userInfo = result;
    }

    ctx.body = returnInfo(LOGIN.SUCCESS, result);
  }

  async loginCheck (ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
      ctx.body = returnInfo(LOGIN.LOGIN_STATUS);
      return;
    }

    ctx.body = returnInfo(LOGIN.NOT_LOGIN_STATUS);
  }

  async logoutAction (ctx, next) {
    delete ctx.session.userInfo;
    ctx.body = returnInfo(LOGIN.LOGOUT_SUCCESS);
  }
}

module.exports = new Admin();