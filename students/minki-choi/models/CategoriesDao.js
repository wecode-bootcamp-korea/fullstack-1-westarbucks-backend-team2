import prisma from 'prisma'

const findCategories = async () => {
  const categories = await prisma.$queryRaw(`
  SELECT id, name FROM categories;
  `)
  return categories;
}

const registerCategory = async () => {
  
  const categories = await prisma.$queryRaw(`
  SELECT * FROM categories WHERE name='${name}'
`)

  const registeredCategory = await prisma.$queryRaw(`
      INSERT INTO categories(name) VALUES ('${name}');
    `)
  return categories, registeredCategory;
}

export default { findCategories, registerCategory }