import prisma from '../prisma/index'

const signup = async(email, password, name) => {
    const user = await prisma.$queryRaw(`
    SELECT * FROM users WHERE email='${email}'
  `)
    const createdUser = await prisma.$queryRaw(`
    INSERT INTO 
      users(email, password, name) 
    VALUES 
      ('${email}', '${password}', '${name}');
  `)

    return { user, createdUser };
};

console.log('findsingup:', signup)

export default { signup }