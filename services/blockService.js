const db = require('../models')
const { Blockedship, User } = db
const helpers = require('../_helpers')

const blockServices = {
  postBlock: async (req, res, callback) => {
    try {
      let block = await Blockedship.findOne({
        where: {
          $and: {
            createdBlockedId: helpers.getUser(req).id,
            blockingId: req.params.blockerId
          }
        }
      })
      if (block) {
        console.log(block)
        return callback({
          status: 'error',
          message: ' this block is exist'
        })
      }
      block = await Blockedship.create({
        createdBlockedId: helpers.getUser(req).id,
        blockingId: req.params.blockerId
      })
      // block = block.toJSON()
      console.log(block)
      callback({
        status: 'success',
        message: `block:${block.id} was created `
      })
    } catch (err) {
      console.log(err.toString())
    }
  },
  getBlocks: async (req, res, callback) => {
    try {
      let blocks = await Blockedship.findAll({
        where: { createdBlockedId: helpers.getUser(req).id }
        // include: [
        //   {
        //     model: User,
        //     as: 'Blockers',
        //     attributes: ['id', 'name', 'createdAt']
        //   }
        // ]
      })
      blocks = blocks.map((t) => ({ ...t.dataValues }))
      callback({ blocks })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  deleteBlock: async (req, res, callback) => {
    try {
      let block = await Blockedship.findOne({
        where: {
          $and: {
            createdBlockedId: helpers.getUser(req).id,
            blockingId: req.params.blockerId
          }
        }
      })
      block.destroy()
      callback({
        status: 'success',
        message: `block:${block.id} was deleted `
      })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  }
}
module.exports = blockServices
