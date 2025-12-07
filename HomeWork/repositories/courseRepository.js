const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const courseRepository = {
    // ดึง courses ตาม subjectId
    async findBySubjectId(subjectId) {
        return prisma.course.findMany({
            where: { subjectId },
            select: {
                id: true,
                year: true
            }
        });
    },

    // สร้าง course ใหม่
    async create(courseData) {
        return prisma.course.create({ data: courseData });
    },

    // ตรวจสอบว่ามี course ซ้ำในปีหรือไม่
    async findBySubjectIdAndYear(subjectId, year) {
        return prisma.course.findFirst({
            where: { subjectId, year }
        });
    }
};

module.exports = courseRepository;
