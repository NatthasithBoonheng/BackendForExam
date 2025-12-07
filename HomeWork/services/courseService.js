const courseRepository = require('../repositories/courseRepository');

const courseService = {
    async getCoursesBySubjectId(subjectId) {
        if (!subjectId || isNaN(subjectId)) throw new Error('Invalid subject id');

        const courses = await courseRepository.findBySubjectId(subjectId);
        if (!courses || courses.length === 0) throw new Error('No courses found for this subject');

        return courses.map(course => ({
            id: course.id,
            year: course.year
        }));
    },

    async addCourse({ subjectId, academicYear }) {
        if (!subjectId || isNaN(subjectId)) throw new Error('Invalid subject id');
        if (!academicYear || isNaN(academicYear)) throw new Error('Invalid academic year');

        const existing = await courseRepository.findBySubjectIdAndYear(subjectId, academicYear);
        if (existing) throw new Error(`Course for subject ${subjectId} already exists in year ${academicYear}`);

        const newCourse = await courseRepository.create({
            subjectId,
            year: academicYear
        });

        return {
            id: newCourse.id,
            subjectId: newCourse.subjectId,
            year: newCourse.year
        };
    }
};

module.exports = courseService;
