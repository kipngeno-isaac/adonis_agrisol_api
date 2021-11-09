'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarketSchema extends Schema {
  up() {
    this.create('markets', (table) => {
      table.increments()
      table.integer('produce_id').unsigned()
      table.decimal('amount', 8, 2)
      table.string('quantity', 100)
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('markets')
  }
}

module.exports = MarketSchema
