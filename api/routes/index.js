const router = require('koa-router')(),
      indexController = require('../controllers/Index');

router.get('/', indexController.index);
router.get('/get_courses', indexController.getCourseData);

module.exports = router;