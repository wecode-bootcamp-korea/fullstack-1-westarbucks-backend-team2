import express from 'express'
const router = express.Router()

import UsersRouter from './UsersRouter'
import DrinksRouter from './drinksRouter'
import CategoriesRouter from './categoriesRouter'

router.use('/users', UsersRouter);
router.use('/drinks', DrinksRouter);
router.use('/categories', CategoriesRouter);

export default router