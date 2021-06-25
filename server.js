const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users/signup', async (req, res) => {
  try {
    console.log('requestBody', req.body)

    const { email, password } = req.body

    console.log('email: ', email, 'password: ', password)

    const createdUser = await prisma.$queryRaw(`
      INSERT INTO User(email, password) VALUES ('${email}', '${password}');
    `)
    res.state(201).json({ message: 'USER_CREATED' })
  } catch (err) {
    res.state(500).json({ message: err.message })
  }
})

const server = http.createServer(app)

const start = async () => { // 서버를 시작하는 함수입니다.
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`))
  } catch (err) { 
    console.error(err)
    await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
}

start()