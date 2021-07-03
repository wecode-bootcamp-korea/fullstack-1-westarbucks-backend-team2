import http from 'http';
import prisma from './prisma/index'
import express from 'express';
import routes from './routes'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(routes)
app.use(cors());

const server = http.createServer(app)
const PORT = process.env.PORT

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

start()