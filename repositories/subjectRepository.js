const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const subjectRepository = {
    // ดึงรายวิชาทั้งหมด พร้อม include courses, pagination และ sorting
    async findAll({ skip = 0, take = 10, sortBy = 'id', order = 'asc' }) {
        return prisma.subject.findMany({
            include: { courses: true },
            skip,
            take,
            orderBy: { [sortBy]: order },
        });
    },

    // ดึงวิชาตาม id
    async findById(id) {
        return prisma.subject.findUnique({
            where: { id },
            include: { courses: true }
        });
    }
};

module.exports = subjectRepository;
