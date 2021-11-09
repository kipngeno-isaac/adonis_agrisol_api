'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PestSchema extends Schema {
  up () {
    this.create('pests', (table) => {
      table.increments()
      table.string('name', 180).notNullable()
      table.string('image_url', 180)
      table.string('description', 180)
      table.string('references', 180)
      table.timestamps()
    })
  }

  down () {
    this.drop('pests')
  }
}

module.exports = PestSchema
