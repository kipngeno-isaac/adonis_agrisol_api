'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Market extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  produce() {
    return this.belongsTo('App/Models/Produce')
  }
}

module.exports = Market
