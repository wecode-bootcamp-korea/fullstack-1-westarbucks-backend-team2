import { DrinksService } from '../services'

const findDrinks = async (req, res) => {
  try {
    const drinks = await DrinksService.findDrinks()

    res.status(200).json({ drinks })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const registerDrink = async (req, res) => {
  try {
    const drinks = await DrinksService.registerDrink()

    if (drinks.length !== 0) {
      res.status(400).json({ message: "ALREADY_EXISTING_DRINK" })
    }

    const registeredDrink = await DrinksService.registerDrink()

    res.status(201).json({
      drink: {
        id : registeredDrink.id,
        korean_name : registeredDrink.korean_name,
        english_name : registeredDrink.english_name,
        category_id : registeredDrink.category_id
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export default { findDrinks, registerDrink }