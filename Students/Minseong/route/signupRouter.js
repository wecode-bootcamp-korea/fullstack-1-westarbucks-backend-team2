import express from 'express';
import { signupController } from '../controller'

const router = express.Router();

router.post('/', signupController.findSignup)

export default router