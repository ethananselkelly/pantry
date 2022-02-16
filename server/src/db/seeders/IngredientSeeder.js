import { Ingredient } from '../../models/index.js'

class IngredientSeeder {
  static async seed() {
    const ingredientsData = [
      {
        name: 'milk'
      },
      {
        name: 'butter'
      },
      {
        name: 'eggs'
      }
    ]
    for (const singleIngredientData of ingredientsData) {
      const currentIngredient = await Ingredient.query().findOne({
        name: singleIngredientData.name
      })
      if (!currentIngredient) {
        await Ingredient.query().insert(singleIngredientData)
      }
    }
  }
}

export default IngredientSeeder