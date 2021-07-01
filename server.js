import http from 'http'
import express from 'express'
import { signUp } from './signUp.js'
import { allUsers } from './allUsers.js'
import { drinks } from './drinks.js'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users/signup', signUp)
app.get('/users', allUsers)
app.get('/drinks', drinks)

const server = http.createServer(app)

const start = async () => {
  try {
    server.listen(8001, () => console.log(`서버 start`))
  } catch (err) { 
    console.error(err)
    await prisma.$disconnect()
  }
}

start()