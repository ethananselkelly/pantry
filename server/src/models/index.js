// include all of your models here using CommonJS requires
const User = require("./User.js")
const Ingredient = require('./Ingredient.js')
const Pantry = require('./Pantry.js')
const Category = require('./Category')

module.exports = { User, Ingredient, Pantry, Category };
