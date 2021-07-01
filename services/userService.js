import { userDao } from "../models";

const allUsers = async () => {
	return await userDao.allUsers();
};

export default { allUsers };