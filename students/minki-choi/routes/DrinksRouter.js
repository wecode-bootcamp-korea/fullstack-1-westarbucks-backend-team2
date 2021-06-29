import express from 'express'
import { DrinksController } from '../controllers'

const router = express.Router();

router.get('/', DrinksController.findDrinks)
router.post('/', DrinksController.registerDrink)

export default router;