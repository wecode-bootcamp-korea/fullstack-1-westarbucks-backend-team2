const signUp = async(req, res) => {
    try {
        const { email, name } = req.body

        console.log('email: ', email, 'name: ', name)

        const createdUser = await prisma.$queryRaw(`
      INSERT INTO User(name, email) VALUES ('${name}', '${email}');
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

export { signUp };