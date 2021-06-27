import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const allUsers = async (req, res) => {
  try {
    const users = await prisma.$queryRaw(`
     SELECT id, email FROM users;
     `)

     console.log('users: ', users)

     res.status(200).json({ users })
  } catch (err) {
    res.status(500).json({massage: err.massage})
  }
}

export { allUsers } 