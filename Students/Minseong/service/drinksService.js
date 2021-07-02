import { drinksDAO } from '../model'

const findDrinks = async() => {
    return await drinksDAO.findDrinks()
}

export default { findDrinks }