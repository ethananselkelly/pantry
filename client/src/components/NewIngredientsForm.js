import React, { useState } from 'react'

const NewIngredientForm = ({ searchIngredient }) => {
  // debugger
  const [newIngredient, setNewIngredient] = useState({
    name: ''
  })

  const handleInputChange = (event) => {
    setNewIngredient({
      ...newIngredient,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validPost = await searchIngredient(newIngredient);
    if (validPost) {
      clearForm();
    }
  };

  const clearForm = () => {
    setNewIngredient({
      name: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p className='ingredient-title'>Add an ingredient to your pantry:</p>
          <input className='form-field' type='text' name='name' onChange={handleInputChange} value={newIngredient.name} />
        </label>
        <div>
          <input className='form-button' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default NewIngredientForm