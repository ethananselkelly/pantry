import React from 'react'

const PantryTile = ({ ingredient, removeIngredient }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await removeIngredient(ingredient)
  }

  return (
    <div>
      <h3>{ingredient.name}</h3>
      <button onClick={handleClick}>➖ Remove</button>
    </div>
  )
}

export default PantryTile