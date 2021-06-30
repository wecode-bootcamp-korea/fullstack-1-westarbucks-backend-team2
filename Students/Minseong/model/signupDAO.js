import prisma from '../prisma/index'

const findSignup = async() => {
    await prisma.$queryRaw(`SELECT * FROM users WHERE email='${email}'`)

    if (user.length !== 0) {
        res.status(400).json({ Message: 'ALREADY_EXISTING_USER' })
    }
    return users;
}

export default { findSignup }