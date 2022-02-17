import React, { useState } from 'react'

const NewIngredientForm = ({ postIngredient }) => {
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
    event.preventDefault()
    const validPost = await postIngredient(newIngredient)
    if (validPost) {
      clearForm()
    }
  }

  const clearForm = () => {
    setNewIngredient({
      name: ''
    })
  }

  return (
    <div>
      <h1>Add an ingredient to your pantry:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ingredient:
          <input type='text' name='name' onChange={handleInputChange} value={newIngredient.name} />
        </label>
        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default NewIngredientForm