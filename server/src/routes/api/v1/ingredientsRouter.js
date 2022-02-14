import express from 'express'

import { Ingredient } from '../../../models/index.js'

const ingredientsRouter = new express.Router()

ingredientsRouter.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.query()
    return res.status(200).json({ ingredients: ingredients })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default ingredientsRouter