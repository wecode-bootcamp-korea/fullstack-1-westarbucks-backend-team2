import prisma from '../prisma/index'

const findSignp = async() => {
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

export default { findSignp }