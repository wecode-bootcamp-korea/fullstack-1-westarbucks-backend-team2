import express from 'express';
import { usersController } from '../controller'

const usersRouter = express.Router();

usersRouter.get('/users', usersController.findUsers)

export default usersRouter