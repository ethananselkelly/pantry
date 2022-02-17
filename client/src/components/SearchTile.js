import React from 'react'

const SearchTile = ({ user, ingredient, saveIngredient }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    ingredient.userId = user.id
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