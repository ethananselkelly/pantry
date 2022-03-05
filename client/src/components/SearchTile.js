import React, { useState } from 'react'
import FormError from './layout/FormError'

const SearchTile = ({ ingredient, saveIngredient }) => {
  const [buttonText, setButtonText] = useState('➕ Add to pantry')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState({});
  const categories = [
    '',
    'fruits & vegetables', 
    'herbs & spices', 
    'meat & seafood', 
    'canned & jarred', 
    'pasta & grains',
    'cooking & baking',
    'bread & baked goods',
    'dairy, cheese, & eggs',
    'snacks',
    'other'
  ]

  const validateInput = (payload) => {
    setErrors({})
    const { category } = payload
    let newErrors = {}
    if (!category) {
      newErrors = {
        ...newErrors,
        category: 'category is required'
      }
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      return true
    }
    return false
  }

  const handleInputChange = (event) => {
    setCategory({
      ...category,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const categoryOptions = categories.map(category => {
    return (
      <option key={category} name='name' value={category}>
        {category}
      </option>
    )
  })
  
  const handleClick = async (event) => {
    event.preventDefault()
    ingredient.category = category.category
    if (validateInput(ingredient)) {
      await saveIngredient(ingredient)
      setButtonText('✅ Added')
    }
  }
  
  const image = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
  let button = <button className='ingredient-button' onClick={handleClick}>{buttonText}</button>

  return (
    <div className='ingredient-tile'>
      <p>{ingredient.name}</p>
      <img src={image} alt={ingredient.name} />
      <label>
        Category:
        <select name='category' onChange={handleInputChange}>{categoryOptions}</select>
      </label>
      <FormError error={errors.category} />
      <div>
        {button}  
      </div>
    </div>
  )
}

export default SearchTile