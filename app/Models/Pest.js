'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pest extends Model {
  remedies() {
    return this.hasMany('App/Models/Remedy')
  }
}

module.exports = Pest
