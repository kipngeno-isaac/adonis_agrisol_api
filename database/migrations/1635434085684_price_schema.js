'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up () {
    this.create('prices', (table) => {
      table.increments()
      table.integer('produce_id').unsigned()
      table.decimal('amount', 8, 2)
      table.date('date')
      table.timestamps()
    })
  }

  down () {
    this.drop('prices')
  }
}

module.exports = PriceSchema
