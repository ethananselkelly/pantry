import React, { useState, useEffect } from 'react'
import PantryTile from './PantryTile'

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

  const updateIngredients = async (deletedIngredient) => {
    ingredients.forEach((ingredient) => {
      if (ingredient.id === deletedIngredient.id) {
        ingredients.splice(ingredient.id, 1)
        getIngredients()
      }
    })
  }

  const removeIngredient = async (ingredient) => {
    try {
      const response = await fetch(`/api/v1/ingredients`, 
      {
        method: 'DELETE',
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
      const body = await response.json()
      const deletedIngredient = body.deletedIngredient
      updateIngredients(deletedIngredient)
      return true
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let ingredientListItems
  if (ingredients[0]) {
    ingredientListItems = ingredients.map((ingredientObject) => {
      return <PantryTile
        key={ingredientObject.id}
        ingredient={ingredientObject}
        removeIngredient={removeIngredient}
        getIngredients={getIngredients}
      />
    })
  } else {
    ingredientListItems = <p className='ingredient-tile'>Add ingredients on the "Find ingredients" page</p>
  }

  return (
    <>
      <div className='container'>
        <h3 className='ingredient-title'>Ingredients in your pantry :</h3>
      </div>
      <div className='container'>
        <div className='column-grid'>
          {ingredientListItems}
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default IngredientsIndex