import { PrismaClient } from "./generated/prisma"

const prisma = new PrismaClient()

async function main() {
  const now = new Date();
  const value = await prisma.value.create({
    data: {
      value: 4,
      created_at: now,
    },
  })
  console.log(value)
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })