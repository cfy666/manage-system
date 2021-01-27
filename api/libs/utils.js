const cp = require('child_process'),
      nanoId = require('nanoid'),
      Qiniu = require('qiniu'),
      crypto = require('crypto'),
      { resolve } = require('path'),
      { qiniu, cryptoSecret } = require('../config/config')

//开启一个子进程
function startProcess (options) {
  const script = resolve(__dirname, '../crawlers/' + options.file),
        child = cp.fork(script, []);

  let invoked = false;

  child.on('message', (data) => {
    options.message(data);
  })

  child.on('exit', (code) => {
    if (invoked) {
      return;
    }

    invoked = true;
    options.exit(code);
  })

  child.on('error', (error) => {
    if (invoked) {
      return;
    }

    invoked = true;
    options.error(error);
  })
}
    
//上传七牛
function  qiniuUpload (options) {
  const mac = new Qiniu.auth.digest.Mac(qiniu.keys.ak, qiniu.keys.sk),
        conf = new Qiniu.conf.Config(),
        client = new Qiniu.rs.BucketManager(mac, conf),
        key = nanoId() + options.ext;

  return new Promise((resolve, reject) => {
    client.fetch(options.url, options.bucket, key, (error, ret, info) => {
      if (error) {
        reject(error)
      } else {
        if (info.statusCode === 200) {
          resolve({ key });
        } else {
          reject(info);
        }
      }
    })
  })
}

//密码加密
function makeCrypto (str) {
  const _md5 = crypto.createHash('md5'),
        content = `str=${str}&secret=${cryptoSecret}`;
    
  return _md5.update(content).digest('hex');
}
module.exports = {
  startProcess,
  qiniuUpload,
  makeCrypto
}