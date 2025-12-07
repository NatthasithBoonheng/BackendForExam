const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // ลองดึง subjects พร้อม courses
    const subjects = await prisma.subject.findMany({
        take: 5,
        include: { courses: true }
    });
    console.log(subjects);

    // ลองดึง course_student ทั้งหมด
    const courseStudents = await prisma.courseStudent.findMany({
        take: 5,
        include: { course: true, student: true }
    });
    console.log(courseStudents);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
