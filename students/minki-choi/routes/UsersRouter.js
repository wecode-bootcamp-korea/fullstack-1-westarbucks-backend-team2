import express from 'express'
import { UsersController } from '../controllers'

const router = express.Router();

router.get('', UsersController.veiwAllUsers)
router.post('/signUp', UsersController.signUp)
router.post('/userLogin', UsersController.userLogin)

export default router
