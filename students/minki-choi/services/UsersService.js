import { UsersDao } from '../models';

const veiwAllUsers = async () => {
  return await UsersDao.veiwAllUsers();
};

const signUp = async (req) => {
  
  // if (user.length !== 0) {
  //   res.status(400).json({ message: "ALREADY_EXISTING_USER_EMAIL" })
  // }

  return await UsersDao.signUp(req)
};

const userLogin = async (req) => {
  return await UsersDao.userLogin(req)
};

export default {
  veiwAllUsers,
  signUp,
  userLogin
};