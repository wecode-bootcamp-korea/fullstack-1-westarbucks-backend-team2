import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const signUp = async(req, res) => {
  try {

    console.log('requestBody', req.body)
      const { email, password } = req.body
      console.log('email: ', email, 'password: ', password)
      const createdUsers = await prisma.$queryRaw(`
    INSERT INTO users (email, password) VALUES ('${email}', '${password}');
  `) 
      console.log('email: ', email, 'password: ', password)

      res.status(201).json({
        user: {
        email: createdUsers.id,
        password: createdUsers.email,
        }
      })
  } catch (err) {
      res.status(500).json({ message: err })
  }
}

export { signUp };