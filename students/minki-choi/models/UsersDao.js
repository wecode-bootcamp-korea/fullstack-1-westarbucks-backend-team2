import prisma from '../../../prisma'

const allUsers = async () => {
  const users = await prisma.$queryRaw(`
  SELECT id, email, password FROM users;
  `)
  return users;
};

const signUp = async () => {
  const { email, password } = req.body

  const user = await prisma.$queryRaw(`
    SELECT * FROM users WHERE email='${email}'
  `)

  const createdUser = await prisma.$queryRaw(`
    INSERT INTO 
      users(email, password) 
    VALUES 
      ('${email}', '${password}');
  `)
  
  return user, createdUser;
};

export default { allUsers, signUp }
