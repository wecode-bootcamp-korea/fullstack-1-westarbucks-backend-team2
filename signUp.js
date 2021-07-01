import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const signUp = async(req, res) => {
  try {
    
    const { email, name, password } = req.body

    const users = await prisma.$queryRaw(`
      SELECT * FROM users WHERE email = '${email}'
    `)
    
    if (users) {
      res.status(400).json({ message: 'ALREADY_EXCISTING_USER'})
    }

    const CreateUser = await prisma.$queryRaw(`
      INSERT INTO users (email, name, password) VALUES ('${email}', '${name}', '${password}');
    `) 

      res.status(201).json({
        user: {
          id: CreateUser.id,
          email:CreateUser.email,
          messages:'가입 축하'}
      })
  } catch (err) {
      res.status(500).json({ message: err })
  }
}

export { signUp };