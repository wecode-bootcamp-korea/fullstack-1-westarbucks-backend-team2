import express from 'express';
import { drinksController } from '../controller'

const drinksRouter = express.Router();

drinksRouter.get('/drinks', drinksController.findDrinks)

export default drinksRouter