import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const drinkRegister = async (req, res) => {
  try {
    const { korean_name, english_name, category_id } = req.body

    const drinks = await prisma.$queryRaw(`
      SELECT * FROM users WHERE korean_name='${korean_name}'
    `)

    if (drinks.length !== 0) {
      res.status(400).json({ message: "ALREADY_EXISTING_DRINK" })
    }

    const registeredDrink = await prisma.$queryRaw(`
      INSERT INTO drinks(korean_name, english_name, category_id) VALUES ('${korean_name}', '${english_name}', '${category_id}');
    `)

    res.status(201).json({
      drink: {
        id : registeredDrink.id,
        korean_name : registeredDrink.korean_name,
        english_name : registeredDrink.english_name,
        category_id : registeredDrink.category_id
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { drinkRegister }