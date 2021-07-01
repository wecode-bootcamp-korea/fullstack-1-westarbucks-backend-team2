import http from 'http'
import app from './app'
import prisma from './prisma/index.js'

const server = http.createServer(app)

const start = async () => {
  try {
    server.listen(8001, () => console.log(`서버 start`))
  } catch (err) { 
    console.error(err)
    await prisma.$disconnect()
  }
};

start();