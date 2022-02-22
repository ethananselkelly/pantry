import express from 'express'
import { Ingredient, User } from '../../../models/index.js'
import ingredientsSearchRouter from './ingredientsSearchRouter.js'
 
const ingredientsRouter = new express.Router()
 
ingredientsRouter.get('/', async (req, res) => {
  const user = await User.query().findById(req.user.id)
  try {
    user.ingredients = await user.$relatedQuery('ingredients')
    return res.status(200).json({ ingredients: user.ingredients })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

ingredientsRouter.post('/', async (req, res) => {
  const { id, name } = req.body
  const spoonacularApi = id
  try {
    const existingIngredient = await Ingredient.query().findOne({ spoonacularApi: spoonacularApi })
    if (existingIngredient) {
      await existingIngredient.$relatedQuery('users').relate( req.user.id )
      return res.status(201).json({ ingredient: newIngredient })
    } else {
      const newIngredient = await Ingredient.query().insert({ name, spoonacularApi })
      await newIngredient.$relatedQuery('users').relate( req.user.id )
      return res.status(201).json({ ingredient: newIngredient })
    }
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

ingredientsRouter.delete('/', async (req, res) => {
  const { id } = req.body
  try {
    const deletedIngredient = await Ingredient.query().findById( id )
    await deletedIngredient.$relatedQuery('users').unrelate().findById( req.user.id )
    return res.status(200)
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})
 
ingredientsRouter.use('/search', ingredientsSearchRouter)
export default ingredientsRouter
