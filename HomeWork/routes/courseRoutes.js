const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// 1.2 GET courses by subjectId
router.get('/a-010/api/courses/:subjectId', courseController.getCoursesBySubjectId);

// 1.3 POST add new course
router.post('/a-010/api/courses', courseController.addCourse);

module.exports = router;
