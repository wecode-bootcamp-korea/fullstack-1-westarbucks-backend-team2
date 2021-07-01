import { signupDao } from "../models";

const signup = async () => {
	return await signupDao.signup();
};

export default { signup };