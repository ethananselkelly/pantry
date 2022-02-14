const Model = require('./Model.js')

class Ingredient extends Model {
    static get tableName() {
        return 'ingredients'
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