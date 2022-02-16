import React, { useState, useEffect } from 'react'
import NewIngredientForm from './NewIngredientsForm.js'

const IngredientsIndex = (props) => {
  const [ingredients, setIngredients] = useState([])

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
        <h3 className='ingredient-title'>Ingredients in your pantry :</h3>
      </div>
      <div>
        {ingredientListItems}
      </div>
      <div>
      </div>
      <NewIngredientForm />
    </>
  )
}

export default IngredientsIndex