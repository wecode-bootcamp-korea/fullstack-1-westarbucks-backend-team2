import express from 'express';
import { usersController } from '../controller'

const router = express.Router();

router.get('', usersController.findUsers)

export default router