const express = require('express');
const router = express.Router();

const subjectController = require('../controller/subjectController.js')

router.get(`/subjects`, subjectController.getAllSubject); //http://localhost:8080/a-010/api/subjects?page=1&limit=10&sortBy=year&order=desc

module.exports = router