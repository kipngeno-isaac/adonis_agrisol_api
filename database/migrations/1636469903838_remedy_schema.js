'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemedySchema extends Schema {
  up () {
    this.create('remedies', (table) => {
      table.increments()
      table.integer('pest_id').unsigned()
      table.string('solution', 180)
      table.string('references', 180)
      table.timestamps()
    })
  }

  down () {
    this.drop('remedies')
  }
}

module.exports = RemedySchema
