import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';


const data = Array.from({length: 100}).map(() => {

})

const prisma = new PrismaClient();

async function main() {
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    })