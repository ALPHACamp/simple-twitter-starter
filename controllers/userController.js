const crypto = require('crypto')
const db = require('../models')
const User = db.User
const helpers = require('../_helpers')

const userController = {
  login (req, res) {
    res.status(200).send(helpers.getUser(req))
  },
  register (req, res) {
    User.findOne({ where: { email: req.body.email } }).then(user => {
      if (user) {
        return res.status(406).end()
      } else {
        User.create({
          name: req.body.name,
          email: req.body.email,
          password: crypto
            .createHash('md5')
            .update(req.body.password, 'utf8')
            .digest('hex')
        }).then(user => {
          return res.status(201).send(user)
        })
      }
    })
  }
}

module.exports = userController
