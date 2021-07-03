import express from 'express'
const router = express.Router()

import usersRouter from './usersRouter'
import drinksRouter from './drinksRouter'
import singupRouter from './signupRouter'

router.use('/users', usersRouter);
router.use('/drinks', drinksRouter);
router.use('/signup', singupRouter);

export default router