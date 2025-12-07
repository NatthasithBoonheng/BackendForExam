const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();

const subjectRepository = {
    async findAll({ skip = 0, take = 10, sortBy = 'id', order = 'asc' }){
        return Prisma.subject.findMany({
            include: {courses : true},
            skip,
            take,
            orderBy: {[sortBy]: order}
        })
    }
}

module.exports = subjectRepository