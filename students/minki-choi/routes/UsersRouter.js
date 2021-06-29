import express from 'express'
import { UsersController } from '../controllers'

const router = express.Router();

router.get('/', UsersController.allUsers)
router.post('/', UsersController.signUp)

export default router
