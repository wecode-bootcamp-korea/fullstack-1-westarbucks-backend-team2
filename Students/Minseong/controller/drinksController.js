import { drinksService } from '../service'

const findDrinks = async(req, res) => {
    try {
        const drinks = await drinksService.findDrinks()
        res.status(200).json({
            drink: {
                id: findDrinks.id,
                korean_name: findDrinks.korean_name,
                english_name: findDrinks.english_name,
                category_name: findDrinks.category_id
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export default { findDrinks }