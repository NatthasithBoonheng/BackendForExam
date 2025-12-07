const express = require('express');
const router = express.Router();
const courseStudentController = require('../controllers/courseStudentController');

// POST: add student to course
router.post('/', courseStudentController.addStudent);

// DELETE: remove student from all courses of a subject
router.delete('/:studentId/:subjectId', courseStudentController.deleteCourseStudent);

module.exports = router;
