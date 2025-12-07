const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routers
const subjectRoutes = require('./routes/subjectRoutes');
const courseRoutes = require('./routes/courseRoutes');
const courseStudentRoutes = require('./routes/courseStudentRoutes');

const app = express();
app.listen(8080,()=>{
    console.log('http://localhost:8080');
})

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
app.use(subjectRoutes);
app.use(courseRoutes);
// Prefix the course-student routes
app.use('/a-010/api/course-student', courseStudentRoutes);

// Catch 404
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: err.message });
});

module.exports = app;
