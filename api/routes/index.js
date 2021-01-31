const router = require('koa-router')(),
      indexController = require('../controllers/Index'),
      loginCheck = require('../middlewares/loginCheck');

router.get('/get_courses', loginCheck, indexController.getCourses);
router.post('/change_course_field', loginCheck, indexController.changeCourseField);
router.post('/change_course_status', loginCheck, indexController.changeCourseStatus);

module.exports = router;