import { productDao } from "../models";

const drinksDB = async () => {
	return await productDao.drinksDB();
};

export default { drinksDB };