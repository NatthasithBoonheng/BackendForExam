const subjectService = require('../services/subjectService');

const subjectController = {
    // 1.1 GET all subjects (with pagination + sorting + include courses)
    async getAllSubjects(req, res) {
        try {
            const { page, limit, sortBy, order } = req.query;
            const subjects = await subjectService.getAllSubjects({
                page: parseInt(page) || 1,
                limit: parseInt(limit) || 10,
                sortBy: sortBy || 'id',
                order: order || 'asc'
            });
            res.json({ success: true, data: subjects });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
};

module.exports = subjectController;
