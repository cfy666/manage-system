const AdminModel = require('../db/models/admin');
class AdminService {
  async addAdmin (adminInfo) {
    const { username } = adminInfo;

    const result = await AdminModel.findOne({
      where: { username }
    });

    if (result) {
      return await AdminModel.update(adminInfo, {
        where: { username }
      });
    } else {
      return await AdminModel.create(adminInfo);
    }
  }

  async login (userInfo) {
    const { username, password } = userInfo;

    const usernameExist = await AdminModel.findOne({
      where: { username }
    });

    if (!usernameExist) {
      return 10003;
    }

    const dbPassword = usernameExist.get('password');

    if (password !== dbPassword) {
      return 10004;
    }

    return 0;
  }

  
}

module.exports = new AdminService();