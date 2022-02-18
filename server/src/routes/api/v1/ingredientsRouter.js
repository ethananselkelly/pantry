import express from 'express'
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

ingredientsRouter.post('/', async (req, res) => {
  const { id, name, userId } = req.body
  console.log(req.body)

  try {
    let newIngredient = await Ingredient.query().insert({ name, id })
    await newIngredient.$relatedQuery('users').relate({ userId })
    return res.status(201).json({ ingredient: newIngredient })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})
 
ingredientsRouter.use('/search', ingredientsSearchRouter)
export default ingredientsRouter
