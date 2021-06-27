import http from 'http'
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { signUp } from './signUp'
import { users } from './users'
import { drinks } from './drinks'
// import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.post('/users/signup', signUp)
app.get('/users', users)
app.get('/drinks', drinks)
    // app.use(cors())

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