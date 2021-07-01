import express from 'express';
import userRouter from './userRouter';
import signupRouter from './signupRouter';
import productRouter from './productRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/users/signup', signupRouter);
router.use('/drinks', productRouter);

export default router;