import React from 'react'

const PantryTile = ({ ingredient, removeIngredient }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await removeIngredient(ingredient)
  }

  return (
    <div className='ingredient-tile'>
      <h3>{ingredient.name}</h3>
      <button className='ingredient-button' onClick={handleClick}>➖ Remove</button>
    </div>
  )
}

export default PantryTile