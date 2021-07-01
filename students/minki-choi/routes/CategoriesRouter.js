import express from 'express'
import { CategoriesController } from '../controllers'

const router = express.Router();

router.get('', CategoriesController.findCategories)
router.post('/register', CategoriesController.registerCategory)

export default router