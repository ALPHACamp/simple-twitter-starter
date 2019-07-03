const crypto = require('crypto')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Reply = db.Reply
const Followship = db.Followship
const helpers = require('../_helpers')

const userController = {
  login(req, res) {
    console.log('gotcha')
    if (helpers.getUser(req)) {
      res.status(200).send(helpers.getUser(req))
    }
    res.status(404).end()
  },
  register(req, res) {
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
  },
  logout (req, res) {
    req.logout()
    res.end()
  },
  getUser(req, res) {
    User.findByPk(req.params.id, {
      include: [
        {
          model: Tweet,
          include: [
            Reply,
            {
              model: User,
              as: 'LikedUsers'
            }
          ]
        },
        {
          model: User,
          as: 'Followings'
        },
        { model: User, as: 'Followers' },
        {
          model: Tweet,
          as: 'LikedTweets',
          include: User
        }
      ]
    })
      .then(user => {
        res.status(200).send(user)
      })
      .catch(error => {
        res.status(404).end()
      })
  },

  getTopTenUser(req, res) {
    User.findAll({
      include: [{ model: User, as: 'Followers' }]
    })
      .then(users => {
        users = users.sort((a, b) => b.Followers.length - a.Followers.length).slice(0, 10)
        res.status(200).send(users)
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  },
  editProfile(req, res) {
    User.update(req.body, {
      where: {
        id: helpers.getUser(req).id
      }
    })
      .then(() => {
        res.status(201).end()
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  },
  follow(req, res) {
    Followship.create({
      followerId: helpers.getUser(req).id,
      followingId: req.body.UserId
    })
      .then(() => {
        res.status(201).end()
      })
      .catch(error => {
        res.status(404).end()
      })
  },
  unfollow(req, res) {
    console.log(req.params)
    Followship.destroy({
      where: {
        followerId: helpers.getUser(req).id,
        followingId: req.params.id
      }
    })
      .then(() => {
        res.status(200).end()
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  }
}

module.exports = userController
