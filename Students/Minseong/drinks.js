import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const drinks = async(req, res) => {
    try {
        const drinks = await prisma.$queryRaw(`
        SELECT drinks.id, drinks.korean_name, drinks.english_name, categories.name FROM drinks join categories on drinks.category_id = categories.id
      `)

        console.log(drinks)

        res.status(201).json({ drinks })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { drinks }