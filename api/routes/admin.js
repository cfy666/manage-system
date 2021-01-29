const router = require('koa-router')(),
      adminController = require('../controllers/Admin');

router.prefix('/admin');

router.get('/create_admin', adminController.createAdmin);
router.post('/login_action', adminController.loginAction);

module.exports = router;