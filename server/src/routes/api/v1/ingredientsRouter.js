import express from 'express'
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

export default ingredientsRouter