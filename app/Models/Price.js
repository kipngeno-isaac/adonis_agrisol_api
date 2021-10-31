'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Price extends Model {
    produce(){
        return this.belongsTo('App/Models/Produce')
    }
}

module.exports = Price
