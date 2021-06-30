// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const signUp = async(req, res) => {
    try {
        const { email, name, password } = req.body

        const user = await prisma.$queryRaw(`
          SELECT * FROM users WHERE email='${email}'
        `)

        if (user.length !== 0) {
            res.status(400).json({ Message: 'ALEADY_EXISTING_USER' })
        }

        const createdUser = await prisma.$queryRaw(`
INSERT INTO users(name, email, password) 
VALUES ('${name}', '${email}','${password}');
`)

        res.status(201).json({
            user: {
                id: createdUser.id,
                email: createdUser.email,
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { signUp }