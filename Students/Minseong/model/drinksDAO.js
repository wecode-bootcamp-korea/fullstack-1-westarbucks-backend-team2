import prisma from '../prisma'

const findDrinks = async() => {

    const drinks = await prisma.$queryRaw(`
  SELECT drinks.id, 
  drinks.korean_name, 
  drinks.english_name, 
  categories.name 
  FROM drinks 
  join categories 
  on drinks.category_id = categories.id
	`)
    return drinks;
}

export default { findDrinks }