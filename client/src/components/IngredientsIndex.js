import React, { useState, useEffect } from 'react'
import NewIngredientForm from './NewIngredientsForm.js'

const IngredientsIndex = (props) => {
  const [ingredients, setIngredients] = useState([])

  const getIngredients = async () => {
    try {
      const response = await fetch(`/api/v1/ingredients`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setIngredients(body.ingredients)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getIngredients()
  }, [])

  const ingredientListItems = ingredients.map((ingredient) => {
    return (
      <div key={ingredient.id}>
        {ingredient.name}
      </div>
    )
  })

  return (
    <>
    <div>
      <h3>Ingredientts in your pantry:</h3>
    </div>
    <div>
      {ingredientListItems}
    </div>
    </>
  )
}

export default IngredientsIndex