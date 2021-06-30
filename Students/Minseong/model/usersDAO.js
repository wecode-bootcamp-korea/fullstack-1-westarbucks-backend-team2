import prisma from '../prisma/index'

const findUsers = async() => {
    console.log('Im in Dao')
    const users = await prisma.$queryRaw(`SELECT * FROM users;`)
    return users;
}

export default { findUsers }