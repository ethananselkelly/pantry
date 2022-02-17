import React, { useState } from 'react'
import NewIngredientForm from './NewIngredientsForm.js'
import SearchTile from './SearchTile.js'

const IngredientSearchPage = (props) => {
  const [searchResults, setSearchResults] = useState([])

  const user = props.user

  const searchIngredient = async (ingredient) => {
    try {
      const response = await fetch(`/api/v1/ingredients/search?ingredient=${ingredient.name}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const ingredients = await response.json()
      setSearchResults(ingredients.results)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let searchResultList 
  if (searchResults[0]) {
    searchResultList = searchResults.map((ingredientObject) => {
      return <SearchTile key={ingredientObject.id} {...ingredientObject} />
    })
  } else {
    searchResultList = `Search for ingredients to add to your pantry`
  }

  return (
    <>
      <div>
        <NewIngredientForm searchIngredient={searchIngredient}/>
      </div>
      <div>
        {searchResultList}
      </div>
    </>
  )
}

export default IngredientSearchPage