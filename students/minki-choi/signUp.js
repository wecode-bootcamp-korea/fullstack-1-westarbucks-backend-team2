import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body

    console.log('email: ', email, 'password: ', password)

    const user = await prisma.$queryRaw(`
      SELECT * FROM users WHERE email='${email}'
    `)
    console.log('user확인: ', user)
    if (user.length !== 0) {
      res.status(400).json({ message: "ALREADY_EXISTING!!!!"})
    }

    const createdUser = await prisma.$queryRaw(`
      INSERT INTO users(email, password) VALUES ('${email}', '${password}');
    `)

    res.status(201).json({
      user: {
        id: createdUser.id,
        email: createdUser.email,
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { signUp } 