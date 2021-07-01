import express from 'express';
import { drinksController } from '../controller'

const router = express.Router();

router.get('/drinks', drinksController.findDrinks)

export default router