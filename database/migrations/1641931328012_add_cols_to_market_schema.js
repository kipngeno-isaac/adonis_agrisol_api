'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColsToMarketSchema extends Schema {
  up() {
    this.table('markets', (table) => {
      // alter table
      table.string('location', 100)
      table.string('phone', 100)
      table.string('seller', 100)
      table.string('produce', 100)

    })
  }

  down() {
    this.table('markets', (table) => {
      // reverse alternations
      table.dropColumn('location')
      table.dropColumn('phone')
      table.dropColumn('seller')
      table.dropColumn('produce')
    })
  }
}

module.exports = AddColsToMarketSchema
