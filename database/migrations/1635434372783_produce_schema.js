'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProduceSchema extends Schema {
  up () {
    this.create('produce', (table) => {
      table.increments()
      table.integer('crop_id').unsigned()
      table.string('name', 180)
      table.string('unit', 180)
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('produce')
  }
}

module.exports = ProduceSchema
