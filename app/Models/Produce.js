'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produce extends Model {
    static get table(){
        return 'produce'
    }

    crop(){
        return this.belongsTo('App/Models/Crop')
    }

    prices(){
        return this.hasMany('App/Models/Price')
    }
}

module.exports = Produce
