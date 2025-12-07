const subjectRepository = require('../repositories/subjectRepository');

const subjectService = {
    // 1.1 GET all subjects (with pagination + sorting + include courses)
    async getAllSubjects({ page = 1, limit = 10, sortBy = 'id', order = 'asc' }) {
        if (page < 1) throw new Error('Page must be >= 1');
        if (limit < 1) throw new Error('Limit must be >= 1');
        if (!['asc', 'desc'].includes(order.toLowerCase())) throw new Error('Order must be asc or desc');

        const skip = (page - 1) * limit;

        const subjects = await subjectRepository.findAll({ skip, take: limit, sortBy, order });

        return subjects.map(sub => ({
            id: sub.id,
            subjectCode: sub.subjectCode,
            title: sub.title,
            credit: sub.credit,
            courses: sub.courses.map(course => ({
                id: course.id,
                year: course.year,
                section: course.section
            }))
        }));
    }
};

module.exports = subjectService;
