/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table('ingredients', (table) => {
    table.integer('spoonacularApi')
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table('ingredients', (table) => {
    table.dropColumn('spoonacularApi')
  })
}
