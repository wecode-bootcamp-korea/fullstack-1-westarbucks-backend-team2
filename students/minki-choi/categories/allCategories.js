import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const allCategories = async (req, res) => {
  try {
    const categiries = await prisma.$queryRaw(`
    SELECT id, name FROM categiries;
    `)

    console.log('categories: ', categories)

    res.status(200).json({ categories })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { allCategories }