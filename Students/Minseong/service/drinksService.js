import drinksDAO from '../model'

const findDrinks = async() => {
    console.log('Im in service')
    return await drinksDAO.findDrinks()
}

export default { findDrinks }