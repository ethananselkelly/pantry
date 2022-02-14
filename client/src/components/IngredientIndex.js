import React, { useState, useEffect } from 'react'

const IngredientsList = (props) => {
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

  const ingredientListItems = ingredients.map((ingredients) => {
    return (
      <li>{ingredients.name}</li>
    )
  })

  return (
    <div>
      {ingredientListItems}
    </div>
  )
}

export default IngredientsList