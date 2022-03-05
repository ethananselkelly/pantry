import { Category } from '../../models/index.js'

class CategorySeeder {
  static async seed() {
    const categoriesData = [
      { name: 'fruits & vegetables' },
      { name: 'herbs & spices' },
      { name: 'meat & seafood' },
      { name: 'canned & jarred' },
      { name: 'pasta & grains' },
      { name: 'cooking & baking' },
      { name: 'bread & baked goods' },
      { name: 'dairy, cheese, & eggs' },
      { name: 'snacks' },
      { name: 'other' },
    ]
    for (const singleCategoryData of categoriesData) {
      const currentCategory = await Category.query().findOne({
        name: singleCategoryData.name
      })
      if (!currentCategory) {
        await Category.query().insert(singleCategoryData)
      }
    }
  }
}

export default CategorySeeder
