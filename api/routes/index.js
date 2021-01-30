const router = require('koa-router')(),
      indexController = require('../controllers/Index'),
      loginCheck = require('../middlewares/loginCheck');

router.get('/get_courses', loginCheck, indexController.getCourses);

module.exports = router;