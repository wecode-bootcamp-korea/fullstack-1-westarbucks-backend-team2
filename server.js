import http from 'http'
import express from 'express'
import { signUp } from './signUp.js';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.post('/users/signup', signUp)

const server = http.createServer(app)

const start = async () => {
  try {
    server.listen(8001, () => console.log(`돌아가는중`))
  } catch (err) { 
    console.error(err)
    //await prisma.$disconnect()
  }
}

start()