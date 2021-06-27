import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const categoryRegister = async (req, res) => {
  try {
    const { name } = req.body

    const categories = await prisma.$queryRaw(`
      SELECT * FROM categories WHERE name='${name}'
    `)

    if (categories.length !== 0) {
      res.status(400).json({ message: "ALREADY_EXISTING_CATEGORY" })
    }

    const registeredCategory = await prisma.$queryRaw(`
      INSERT INTO categories(name) VALUES ('${name}');
    `)

    res.status(201).json({
      category: {
        id : registeredCategory.id,
        name : registeredCategory.name
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { categoryRegister }