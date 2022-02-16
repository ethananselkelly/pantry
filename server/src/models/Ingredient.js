const Model = require('./Model.js')
const uniqueFactory = require('objection-unique')

const unique = uniqueFactory({
    fields: ['name'],
    identifiers: ['id']
})

class Ingredient extends unique(Model) {
    static get tableName() {
        return 'ingredients'
    }

    static get relationMappings() {
        const User = require('./User.js')
        const Pantry = require('./Pantry.js')

        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'ingredients.id',
                    through: {
                        from: 'pantries.ingredientId',
                        to: 'pantries.userId'
                    },
                    to: 'users.id'
                }
            },
            pantries: {
                relation: Model.HasManyRelation,
                modelClass: Pantry,
                join: {
                    from: 'ingredients.id',
                    to: 'pantries.ingredientId'
                }

            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' }
            }
        }
    }
}

module.exports = Ingredient