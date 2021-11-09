'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Remedy extends Model {
  pests() {
    return this.belongsTo('App/Models/Pest')
  }
}

module.exports = Remedy
