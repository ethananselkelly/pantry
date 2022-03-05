/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table('ingredients', (table) => {
    table.bigInteger('categoryId')
      .notNullable()
      .unsigned()
      .index()
      .references('categories.id')
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table('ingredients', (table) => {
    table.dropColumn('categoryId')
  })
}
