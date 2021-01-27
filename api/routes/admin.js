const router = require('koa-router')(),
      adminController = require('../controllers/Admin');

router.prefix('/admin');

router.get('/create_admin', adminController.createAdmin);

module.exports = router;