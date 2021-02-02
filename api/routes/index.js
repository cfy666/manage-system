const router = require('koa-router')(),
      indexController = require('../controllers/Index'),
      loginCheck = require('../middlewares/loginCheck');

router.get('/get_courses', loginCheck, indexController.getCourses);
router.get('/get_recom_courses', loginCheck, indexController.getRecomCourses);
router.get('/get_sliders', loginCheck, indexController.getSliders);
router.post('/change_course_field', loginCheck, indexController.changeCourseField);
router.post('/change_status', loginCheck, indexController.changeDataStatus);


module.exports = router;