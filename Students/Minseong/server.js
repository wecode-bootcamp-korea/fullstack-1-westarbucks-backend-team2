import http from 'http'
import express from 'express'
import { PrismaClient } from '@prisma/client'
// import { signUp } from './signUp'
// import Users from './Users'
// import Drinks from './Drinks'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users/sigUp', async(req, res) => { // 1
    try {
        const { email, name } = req.body

        console.log('email: ', email, 'name: ', name)

        const createdUser = await prisma.$queryRaw(`
      INSERT INTO User(name, email) VALUES ('${name}', '${email}');
    `) // 4

        res.status(201).json({ // 5
            user: {
                id: createdUser.id,
                email: createdUser.email,
            }
        })
    } catch (err) { // 2
        res.status(500).json({ message: err.message }) // 6
    }
})

const server = http.createServer(app) // express app 으로 서버를 만듭니다.

const start = async() => { // 서버를 시작하는 함수입니다.
    try {
        server.listen(8000, () => console.log(`Server is listening on 8000`))
    } catch (err) {
        console.error(err)
        await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
    }
}

start()