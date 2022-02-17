import express from 'express'
import SpoonacularClient from '../../../apiClient/SpoonacularClient.js'

const ingredientsSearchRouter = new express.Router()

ingredientsSearchRouter.get('/', async (req, res) => {
  const ingredient = req.query.ingredient

  try {
    const apiResponse = await SpoonacularClient.getIngredient(ingredient)
    const ingredientData = JSON.parse(apiResponse)
    return res
      .set({ 'Content-Type': 'application/json'})
      .status(200)
      .json(ingredientData)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ errors: error })
  }
})

export default ingredientsSearchRouter