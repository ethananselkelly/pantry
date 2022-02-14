/* eslint-disable no-console */
import { connection } from "../boot.js"
import IngredientSeeder from './seeders/IngredientSeeder.js'

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log('seeding ingredients...')
    await IngredientSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder