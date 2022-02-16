const Model = require('./Model.js')

class Pantry extends Model {
  static get tableName() {
    return 'pantries'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['ingredientId', 'userId'],
      properties: {
        ingredientId: { type: ['string', 'integer'] },
        userId: { type: ['string', 'integer'] }
      }
    }
  }

  static relationMappings() {
    const Ingredient = require('./Ingredient.js')
    const User = require('./User')

    return {
      ingredient: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: 'pantries.ingredientId',
          to: 'ingredients.id'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pantries.userId',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Pantry