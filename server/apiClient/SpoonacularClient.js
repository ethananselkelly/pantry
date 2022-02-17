import got from 'got'

const spoonacularApiKey = process.env.SPOONTACULAR_API

class SpoonacularClient {
  static async getIngredient(ingredient) {
    try {
      const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=${spoonacularApiKey}&query=${ingredient}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default SpoonacularClient