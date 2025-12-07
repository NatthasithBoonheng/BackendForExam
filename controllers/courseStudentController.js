const courseStudentService = require('../services/courseStudentService');

const courseStudentController = {
    // Add student
    async addStudent(req, res) {
        try {
            const { courseId, studentId, grade } = req.body;
            const result = await courseStudentService.addStudentToCourse(
                parseInt(courseId),
                parseInt(studentId),
                parseFloat(grade)
            );
            res.json({ success: true, data: result });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    },

    // Delete student from subject
    async deleteCourseStudent(req, res) {
        try {
            const studentId = parseInt(req.params.studentId);
            const subjectId = parseInt(req.params.subjectId);

            const result = await courseStudentService.deleteCourseStudent(studentId, subjectId);
            res.json({ success: true, data: result });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
};

module.exports = courseStudentController;
