import http from 'http';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/users/signup', async (req, res) => {
  try {
    const { email, password } = req.body

    console.log('email: ', email, 'password: ', password)

    const createdUser = await prisma.$queryRaw(`
      INSERT INTO users(email, password) VALUES ('${email}, '${password}');
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
})

const server = http.createServer(app)

const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`))
  } catch (err) {
    console.error(err)
    await prisma.$disconnect()
  }
}

start()