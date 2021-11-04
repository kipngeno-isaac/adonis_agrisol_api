'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * PricesTransformer class
 *
 * @class PricesTransformer
 * @constructor
 */
class PricesTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
     // add your transformation object here
     id: model.id,
     name: model.name,
     unit: model.unit,
     
    }
  }
}

module.exports = PricesTransformer
