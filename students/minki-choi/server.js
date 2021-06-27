import http from 'http';
import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { signUp } from './signUp'
import { allUsers } from './allUsers'
import cors from 'cors'

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());
app.post('/users/signup', signUp)
app.get('/users', allUsers)

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