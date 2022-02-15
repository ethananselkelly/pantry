/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('pantries', (table) => {
    table.bigIncrements('id').primary()
    table.bigInteger('userId')
      .notNullable()
      .unsigned()
      .index()
      .references('users.id')
    table.bigInteger('ingredientId')
      .notNullable()
      .unsigned()
      .index()
      .references('ingredients.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('pantries')
}
