import prisma from '../prisma'

const findDrinks = async () => {
  const drinks = await prisma.$queryRaw(`
    SELECT 
      drinks.id,
      drinks.korean_name,
      drinks.english_name,
      categories.name,
      nutritions.kcal,
      nutritions.sodium,
      nutritions.fat,
      nutritions.protein,
      nutritions.sugars,
      nutritions.caffeine,
      allergies.name
    FROM categories
    JOIN drinks
      ON categories.id = drinks.category_id
    JOIN nutritions
      ON drinks.id = nutritions.drink_id
    LEFT JOIN drink_allergies
      ON drinks.id = drink_allergies.drink_id
    LEFT JOIN allergies
      ON allergies.id = drink_allergies.allergy_id
  `)
  return drinks;
};

const registerDrink = async () => {
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

