import React from 'react'

const SearchTile = ({ ingredient, saveIngredient }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await saveIngredient(ingredient)
  }

  return (
    <div className='ingredient-tile'>
      <p>{ingredient.name}</p>
      <button className='ingredient-button' onClick={handleClick}>➕ Add to pantry</button>
    </div>
  )
}

export default SearchTile