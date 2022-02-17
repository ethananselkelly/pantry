import express from 'express'
<<<<<<< HEAD
import { Ingredient } from '../../../models/index.js'
import ingredientsSearchRouter from './ingredientsSearchRouter.js'
 
const ingredientsRouter = new express.Router()
 
ingredientsRouter.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.query()
    return res.status(200).json({ ingredients })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})
 
ingredientsRouter.use('/search', ingredientsSearchRouter)
=======
import SpoonacularClient from '../../../../apiClient/SpoonacularClient.js'

const ingredientsRouter = new express.Router()

ingredientsRouter.get('/', async (req, res) => {
  const ingredient = req.query.ingredient

  try {
    const ingredientResponse = await SpoonacularClient.getIngredient(ingredient)
    const ingredientData = JSON.parse(ingredientResponse)
    return res 
      .set({ 'Content-Type': 'application/json' })
      .status(200)
      .json(ingredientData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

>>>>>>> 42045385d4b95aa4c922ca5a5018e2db7b56f5bd
export default ingredientsRouter