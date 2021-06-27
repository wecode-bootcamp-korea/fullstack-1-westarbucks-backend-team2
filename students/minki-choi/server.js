import http from 'http';
import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { signUp } from './users/signUp'
import { allUsers } from './users/allUsers'
import { findDrinks } from './drinks/findDrinks'
import { drinkRegister } from './drinks/drinkRegister'
import { allCategories } from './categories/allCategories'
import { categoryRegister } from './categories/categoryRegister'
import cors from 'cors'

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());
app.get('/users', allUsers)
app.post('/users/signup', signUp)
app.get('/drinks', findDrinks)
app.post('/dirnks/register', drinkRegister)
app.get('/categories', allCategories)
app.post('/categories/register', categoryRegister)

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