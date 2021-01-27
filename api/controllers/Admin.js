const { adminInfo } = require('../config/config'),
      { addAdmin } = require('../services/Admin'),
      { makeCrypto } = require('../libs/utils');
class Admin {
  async createAdmin () {
    adminInfo.password = makeCrypto(adminInfo.password);
    
    const result = await addAdmin(adminInfo);

    if (result) {
      console.log(0);
    } else {
      console.log(1);
    }
  }
}

module.exports = new Admin();