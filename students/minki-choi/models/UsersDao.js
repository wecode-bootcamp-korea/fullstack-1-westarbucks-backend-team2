import prisma from 'prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const veiwAllUsers = async () => {
  const users = await prisma.$queryRaw(`
  SELECT id, email, password FROM users;
  `)
  return users;
};

console.log('durldi')

const signUp = async () => {
  const { email, password } = req.body
  const saltRounds = 10;

  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  const createdUser = await prisma.$queryRaw(`
    INSERT INTO 
      users(email, password) 
    VALUES 
      ('${email}', '${hashedPassword}');
  `)
  
  return user, createdUser, isPasswordVerifide;
};

const userLogin = async() => {
  const userExists = await prisma.users.findUnique({ where: { email } });
  
  if (!userExists) {
    const err = new Error('USER_DOES_NOT_EXISTS.');
    err.statusCode = 404;
    throw err;
  }
  const { email: id, password: hashedPassword } = userExists;

  const isPasswordVerifide = bcrypt.compareSync(password, hashedPassword);

  if (!isPasswordVerifide) {
    const error = new Error('PASSWORD_DOES_NOT_MATCH');
    error.statusCode = 404;
    throw error;
  }

  const token = jwt.sign({ id }, 'secret_key_minki');
  console.log('token: ', token);

  return token;
}

export default { veiwAllUsers, signUp, userLogin }
