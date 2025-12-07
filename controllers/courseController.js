const courseService = require('../services/courseService');

const courseController = {
    async getCoursesBySubjectId(req, res) {
        try {
            const subjectId = parseInt(req.params.subjectId);
            const courses = await courseService.getCoursesBySubjectId(subjectId);
            res.json({ success: true, data: courses });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    },

    async addCourse(req, res) {
        try {
            const { subjectId, academicYear } = req.body;
            const newCourse = await courseService.addCourse({
                subjectId: parseInt(subjectId),
                academicYear: parseInt(academicYear)
            });
            res.json({ success: true, data: newCourse });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
};

module.exports = courseController;
