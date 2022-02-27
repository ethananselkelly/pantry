import React, { useState } from 'react'

const SearchTile = ({ ingredient, saveIngredient }) => {
  const [buttonText, setButtonText] = useState('➕ Add to pantry')
  
  const handleClick = async (event) => {
    event.preventDefault()
    setButtonText('✅ Added')
    await saveIngredient(ingredient)
  }
  
  const image = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
  let button = <button className='ingredient-button' onClick={handleClick}>{buttonText}</button>

  return (
    <div className='ingredient-tile'>
      <p>{ingredient.name}</p>
      <img src={image} alt={ingredient.name} />
      <div>
        {button}  
      </div>
    </div>
  )
}

export default SearchTile