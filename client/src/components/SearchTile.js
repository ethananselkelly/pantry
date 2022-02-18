import React from 'react'

const SearchTile = ({ ingredient, saveIngredient }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await saveIngredient(ingredient)
  }

  return (
    <div>
      <h3>{ingredient.name}</h3>
      <button onClick={handleClick}>➕ Add to pantry</button>
    </div>
  )
}

export default SearchTile