import prisma from '../prisma/index'

const findUsers = async() => {

    const users = await prisma.$queryRaw(`SELECT email,name,password FROM users;`)
    return users;
}

export default { findUsers }