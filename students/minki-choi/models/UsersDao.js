import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const viewAllUsers = async () => {
  return await prisma.$queryRaw(`
    SELECT id, email, password FROM users;
  `)
};
  
  // const saltRounds = 10;

  // const salt = await bcrypt.genSaltSync(saltRounds);
  // const hashedPassword = await bcrypt.hashSync(password, salt);

const createdUser = async (email, password) => {
  return await prisma.$queryRaw(`
    INSERT INTO 
      users(email, password) 
    VALUES 
    ('${email}', '${password}');
  `);
}

const verifyEmail = async (email) => {
  return await prisma.$queryRaw(`
    SELECT email FROM users where email=('${email}')
  `);
}

const getEmail = async (email) => {
  return await prisma.$queryRaw(`
    SELECT email, password FROM users WHERE email='${email}'
  `)
}

const getPassword = async (password) => {
  return await prisma.$queryRaw(`
    SELECT password FROM users WHERE password='${password}'
  `)
}

export default {
  viewAllUsers,
  createdUser,
  verifyEmail,
  getEmail,
  getPassword
 }
