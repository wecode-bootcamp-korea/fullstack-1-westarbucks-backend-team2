import { drinksService } from '../service'

const findDrinks = async(req, res) => {
    try {
        const drinks = await drinksService.findDrinks()
        res.status(200).json({
            message: "SUCCESS",
            data: drinks
        })
    } catch (err) {
        console.log(err)
    }
}

export default { findDrinks }