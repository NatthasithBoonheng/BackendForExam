const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const courseStudentRepository = {
    async addStudent(courseId, studentId, grade) {
        return prisma.courseStudent.create({
            data: {
                courseId,
                studentId,
                grade
            },
            include: {
                course: true,
                student: true
            }
        });
    },

    async deleteByStudentIdAndCourseId(studentId, courseId) {
        return prisma.courseStudent.deleteMany({
            where: { studentId, courseId }
        });
    }
};

module.exports = courseStudentRepository;
