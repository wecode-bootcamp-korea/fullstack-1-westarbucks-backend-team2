import prisma from '../../../prisma'

const findDrinks = async () => {
  const drinks = await prisma.$queryRaw(`
    SELECT 
      drinks.id, drinks.korean_name, drinks.english_name, categories.name
    FROM 
      categories
    JOIN 
      drinks
    ON 
      categories.id = drinks.category_id
  `)
  return drinks;
};

const registerDrink = async () => {
  const { korean_name, english_name, category_id } = req.body

  const drinks = await prisma.$queryRaw(`
    SELECT * FROM drinks WHERE korean_name='${korean_name}'
  `)

  const registeredDrink = await prisma.$queryRaw(`
    INSERT INTO 
      drinks(korean_name, english_name, category_id) 
    VALUES 
      ('${korean_name}', '${english_name}', '${category_id}');
  `)

  return drinks, registeredDrink;
};

export default { findDrinks, registerDrink }

