import { CategoriesDao } from '../models'

const findCategories = async () => {
  return await CategoriesDao.findCategories()
};

const registerCategory = async () => {
  return await categoriesRegisterDao.registerCategory()
};

export default { findCategories, registerCategory }