import React, { useState } from 'react'
import NewIngredientForm from './NewIngredientsForm.js'
import SearchTile from './SearchTile.js'

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
      setSearchResults(ingredients.results)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const saveIngredient = async (ingredient) => {
    try {
      const response = await fetch(`/api/v1/ingredients`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(ingredient)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      return true
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let searchResultList 
  if (searchResults[0]) {
    searchResultList = searchResults.map((ingredientObject) => {
      return <SearchTile 
        key={ingredientObject.id} 
        ingredient={ingredientObject} 
        saveIngredient={saveIngredient}
      />
    })
  } else {
    searchResultList = <p className='ingredient-tile'>
      Search for ingredients to add to your pantry
    </p>
  }

  return (
    <>
      <div className='container'>
        <NewIngredientForm searchIngredient={searchIngredient}/>
      </div>
      <div className='container'>
        <div className='column-grid'>
          {searchResultList}
        </div>
      </div>
    </>
  )
}

export default IngredientSearchPage