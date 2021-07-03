import http from 'http'
import { prisma } from './prisma/index'
import { app } from './app'

const server = http.createServer(app)

const start = async() => {
    try {
        server.listen(8000, () => console.log(`Server is listening on 8000`))
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
    }
}
start()