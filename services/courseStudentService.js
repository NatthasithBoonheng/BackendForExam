const courseRepository = require('../repositories/courseRepository');
const courseStudentRepository = require('../repositories/courseStudentRepository');

const courseStudentService = {
    // Add student to course
    async addStudentToCourse(courseId, studentId, grade) {
        if (!courseId || !studentId || grade === undefined) {
            throw new Error('courseId, studentId, and grade are required');
        }
        // Optionally: check duplicate
        const existing = await prisma.courseStudent.findUnique({
            where: { courseId_studentId: { courseId, studentId } }
        });
        if (existing) throw new Error('Student is already enrolled in this course');

        return courseStudentRepository.addStudent(courseId, studentId, grade);
    },

    // Delete student from all courses of a subject
    async deleteCourseStudent(studentId, subjectId) {
        if (!studentId || !subjectId) throw new Error('studentId and subjectId are required');

        // หา courses ของ subjectId
        const courses = await courseRepository.findBySubjectId(subjectId);
        if (!courses || courses.length === 0) throw new Error('No course found for this subject');

        let totalDeleted = 0;
        for (const course of courses) {
            const deleted = await courseStudentRepository.deleteByStudentIdAndCourseId(studentId, course.id);
            totalDeleted += deleted.count;
        }

        if (totalDeleted === 0) throw new Error('No record found to delete');
        return { deletedCount: totalDeleted };
    }
};

module.exports = courseStudentService;
