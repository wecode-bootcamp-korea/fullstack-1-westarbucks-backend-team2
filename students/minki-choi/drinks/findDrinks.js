import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const findDrinks = async (req, res) => {
  try {
    const drinks = await prisma.$queryRaw(`
     SELECT drinks.id, drinks.korean_name, drinks.english_name, categories.name
     FROM categories
     JOIN drinks
     ON categories.id = drinks.category_id
     `)

     console.log('drinks: ', drinks)

     res.status(200).json({ drinks })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { findDrinks } 