import { DrinksDao } from '../models';

const findDrinks = async () => {
  return await DrinksDao.findDrinks()
};

const registerDrink = async () => {
  return await drinksRegisterDao.registerDrink()
};

export default { findDrinks, registerDrink }
