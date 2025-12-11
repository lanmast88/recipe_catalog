import { Router } from 'express'
import {
  getAll,
  addRecipe,
  getOne,
  deleteRecipe
} from '../controllers/recipesController.js'

const router = Router()

router.get('/', getAll)
router.post('/', addRecipe)

// ← Добавляем работу с params
router.get('/:id', getOne)
router.delete('/:id', deleteRecipe)

export default router
