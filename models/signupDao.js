import prisma from "../prisma";

const signup = async () => {
	const createUser = await prisma.$queryRaw(`
		INSERT INTO users (email, password) VALUES ('${email}', '${password}');
	`);
	return createUser;
};

export default { signup };