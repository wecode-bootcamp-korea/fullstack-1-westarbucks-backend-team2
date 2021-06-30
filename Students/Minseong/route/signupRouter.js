import express from 'express';
import { signupController } from '../controller'

const singupRouter = express.Router();

singupRouter.post('/users/signup', signupController.findSignup)

export default singupRouter