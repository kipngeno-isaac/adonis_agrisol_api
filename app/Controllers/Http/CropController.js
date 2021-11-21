'use strict'

const Crop = use('App/Models/Crop')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with crops
 */
class CropController {
  /**
   * Show a list of all crops.
   * GET crops
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const crop = await Crop.all()
    response.ok({ status: true, data: crop })
  }

  /**
   * Render a form to be used for creating a new crop.
   * GET crops/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new crop.
   * POST crops
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const cropData = request.post()
    const crop = await Crop.create(cropData)
    response.created({ status: true, data: crop })
  }

  /**
   * Display a single crop.
   * GET crops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show({ params, request, response }) {
    const { id } = request.params
    const crop = await Crop.find(id)

    response.ok({ status: true, data: crop })
  }

  /**
   * Render a form to update an existing crop.
   * GET crops/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async edit({ params, request, response }) {
  }

  /**
   * Update crop details.
   * PUT or PATCH crops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a crop with id.
   * DELETE crops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = CropController
