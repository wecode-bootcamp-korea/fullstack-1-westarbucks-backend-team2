import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const findDrinks = async (req, res) => {
  try {
    const users = await prisma.$queryRaw(`
     SELECT id, korean_name, english_name, category_id FROM drinks;
     `)

     console.log('drinks: ', drinks)

     res.status(200).json({ drinks })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { findDrinks } 