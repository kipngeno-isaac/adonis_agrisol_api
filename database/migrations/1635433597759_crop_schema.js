'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CropSchema extends Schema {
  up () {
    this.create('crops', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.integer('duration').unsigned()
      table.text('description')
      table.string('links', 180)
      table.boolean('status').default('true')
      table.timestamps()
    })
  }

  down () {
    this.drop('crops')
  }
}

module.exports = CropSchema
