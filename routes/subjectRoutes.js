const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

const studentId = '010';

// 1.1 GET all subjects
router.get(`/a-${studentId}/api/subjects`, subjectController.getAllSubjects);

module.exports = router;
