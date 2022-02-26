import React from 'react'

const SearchTile = ({ ingredient, saveIngredient }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await saveIngredient(ingredient)
  }

  const image = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`

  return (
    <div className='ingredient-tile'>
      <p>{ingredient.name}</p>
      <img src={image} alt={ingredient.name} />
      <button className='ingredient-button' onClick={handleClick}>➕ Add to pantry</button>
    </div>
  )
}

export default SearchTile