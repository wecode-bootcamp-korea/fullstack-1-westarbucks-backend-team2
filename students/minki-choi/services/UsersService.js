import { UsersDao } from '../models';

const allUsers = async () => {
  return await UsersDao.allUsers();
};

const signUp = async (req) => {
  return await signupDao.signUp(req)
};

export default {
  allUsers,
  signUp
};