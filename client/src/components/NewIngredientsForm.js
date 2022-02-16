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

  const clearForm = () => {
    setNewIngredient({
      name: ''
    })
  }

  return (
    <div>
      <form>
        <label>
          Add an ingredient to your pantry:
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