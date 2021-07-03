import { UsersDao } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const TOKEN_KEY = '' + process.env.SECRET_KEY;

const viewAllUsers = async () => {
  return await UsersDao.viewAllUsers();
};

const signUp = async (email, password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existedUser = await UsersDao.verifyEmail(email);

  if (existedUser.length) {
    const error = new Error('error');
    error.statusCode = 404;
    throw error;
  }

  return await UsersDao.createdUser(email, hashedPassword)
};

const userLogin = async (email, password) => {
  const findUserByEmail = await UsersDao.getEmail(email);

  if (!findUserByEmail) {
    const err = new Error('USER_DOES_NOT_EXISTS');
    err.statusCode = 404;
    throw err;
  }

  const { email: userEmail, password: hashedPassword } = findUserByEmail[0];

  const comparedPassword = await bcrypt.compare(password, hashedPassword);
  
  if (!comparedPassword) {
    const error = new Error('PASSWORD_DOES_NOT_MATCH');
    error.statusCode = 401;
    throw error;
  }
  const token = jwt.sign({ userEmail }, TOKEN_KEY, { expiresIn: '1h'});

  return token;
};

export default {
  viewAllUsers,
  signUp,
  userLogin
};