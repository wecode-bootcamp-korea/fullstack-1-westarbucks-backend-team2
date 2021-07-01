import { CategoriesDao } from '../models'

const findCategories = async () => {
  return await CategoriesDao.findCategories()
};

const registerCategory = async (req) => {

  if (categories.length !== 0) {
    res.status(400).json({ message: "ALREADY_EXISTING_CATEGORY" })
  }

  return await categoriesRegisterDao.registerCategory()
};

export default { findCategories, registerCategory }