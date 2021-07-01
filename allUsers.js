import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const allUsers = async(req, res) => {
  try {
    const users = await prisma.$queryRaw(`
      SELECT * FROM users
     `)
      res.status(201).json({ users })
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
  
  export { allUsers }