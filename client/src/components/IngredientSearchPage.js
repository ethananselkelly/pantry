import React, { useState } from 'react'
import NewIngredientForm from './NewIngredientsForm.js'

const IngredientSearchPage = (props) => {
  const [searchResults, setSearchResults] = useState([])

  const searchIngredient = async (ingredient) => {
    try {
      const response = await fetch(`/api/v1/ingredients/search?ingredient=${ingredient.name}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const ingredients = await response.json()
      setSearchResults(ingredients)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  return (
    <div>
      <NewIngredientForm searchIngredient={searchIngredient}/>
    </div>

  )
}

export default IngredientSearchPage