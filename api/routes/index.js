const router = require('koa-router')(),
      indexController = require('../controllers/Index'),
      loginCheck = require('../middlewares/loginCheck');

router.get('/get_courses', loginCheck, indexController.getCourses);
router.get('/get_recom_courses', loginCheck, indexController.getRecomCourses);
router.post('/change_course_field', loginCheck, indexController.changeCourseField);
router.post('/change_course_status', loginCheck, indexController.changeCourseStatus);
router.post('/change_recom_course_status', loginCheck, indexController.changeRecomCourseStatus);

module.exports = router;