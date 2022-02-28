import got from 'got'
import dotenv from 'dotenv'
dotenv.config()
 
const spoonacularApiKey = process.env.SPOONACULAR_API
 
class SpoonacularClient {
 static async getIngredient(ingredient) {
   try {
     const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=${spoonacularApiKey}&query=${ingredient}&number=3`
     const apiResponse = await got(url)
     const responseBody = apiResponse.body
     return responseBody
   } catch (error) {
     return { error: error.message }
   }
 }
}
 
export default SpoonacularClient