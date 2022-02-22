import React from 'react'

const PantryTile = ({ ingredient, removeIngredient, getIngredients }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await removeIngredient(ingredient)
    // await getIngredients()
  }

  return (
    <div>
      <h3>{ingredient.name}</h3>
      <button onClick={handleClick}>➖ Remove</button>
    </div>
  )
}

export default PantryTile