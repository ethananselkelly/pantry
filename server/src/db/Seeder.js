/* eslint-disable no-console */
import { connection } from "../boot.js";
import CategorySeeder from "./seeders/categorySeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log('seeding categories')
    await CategorySeeder.seed()
    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
