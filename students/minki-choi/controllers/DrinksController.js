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
    const { korean_name, english_name, category_id } = req.body;
    const registeredDrink = await DrinksService.registerDrink(req);
    
    if (drinks.length !== 0) {
      res.status(400).json({ message: "ALREADY_EXISTING_DRINK" })
    }

    res.status(201).json({
      korean_name, english_name, category_id
      }
    )
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export default { findDrinks, registerDrink }