const { REDIS_CONF } = require('./db_config');
module.exports = {
  qiniu: {
    keys: {
      ak: 'MxqQL2kX1r1Vvez0iXHmjyFWWHXzwkmJQFuBGs8-',
      sk: 'yjBk8_HDG12p1byBeGBJBmu21EFMMeXLHRJtX6wl',
    },
    bucket: {
      tximg: {
        bucket_name: 'txclass-myimg',
        domain: 'http://qndn76llb.hd-bkt.clouddn.com/'
      }
    }
  },
  crawler: {
    url: {
      main: 'https://msiwei.ke.qq.com/#category=-1&tab=0',
      course: 'https://msiwei.ke.qq.com/#tab=1&category=-1',
      teacher: 'https://msiwei.ke.qq.com/#tab=2&category=-1',
      aboutus: 'https://msiwei.ke.qq.com/#tab=3&category=-1'
    }
  },
  sessionInfo: {
    keys: ['a1!s2@d3#f4$_+g5%h6^'],
    name: 'txclass.sid',
    prefix: 'txclass.sess'
  },
  cookieInfo: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  redisInfo: {
    all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}`
  },
  adminInfo: {
    username: 'admin',
    password: 'admin',
  },
  cryptoSecret: 'JDGFShdfkjj438672@@#$@#4'
}