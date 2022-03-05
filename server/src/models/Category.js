const Model = require('./Model')

class Category extends Model {
  static get tableName() {
    return 'categories'
  }

  static relationMappings() {
    const Ingredient = require('./Ingredient')

    return {
      ingredient: {
        relation: Model.HasManyRelation,
        modelClass: Ingredient,
        join: {
          from: 'categories.id',
          to: 'ingredients.categoryId'
        }
      }
    }
  }
}

module.exports = Category