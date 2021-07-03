import express from 'express';
import { signupController } from '../controller'

const router = express.Router();

router.post('', signupController.signup)

export default router