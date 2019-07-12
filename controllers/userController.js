const crypto = require('crypto')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Reply = db.Reply
const Followship = db.Followship
const helpers = require('../_helpers')
const fs = require('fs')
const imgur = require('imgur')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID

const userController = {
  login (req, res) {
    console.log('gotcha')
    if (helpers.getUser(req)) {
      res.status(200).send(helpers.getUser(req))
    }
    res.status(404).end()
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
  },
  logout (req, res) {
    req.logout()
    res.end()
  },
  getUser (req, res) {
    User.findByPk(req.params.id, {
      include: [
        {
          model: Tweet,
          include: [
            Reply,
            {
              model: User,
              attributes: { exclude: ['password'] },
              as: 'LikedUsers'
            }
          ]
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
          as: 'Followings'
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
          as: 'Followers'
        },
        {
          model: Tweet,
          as: 'LikedTweets',
          include: {
            model: User,
            attributes: { exclude: ['password'] }
          }
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

  getTopTenUser (req, res) {
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
  async editProfile (req, res) {
    const file = req.file
    const { name, introduction } = req.body
    let imgurObject = null
    if (file) {
      try {
        imgur.setClientId(IMGUR_CLIENT_ID)
        imgurObject = await imgur.uploadFile(file.path)
      } catch (error) {
        console.log(error)
      }  
    }
    return User.findByPk(helpers.getUser(req).id)
      .then(user => {
        return user.update({
          name,
          introduction,
          avatar: file ? imgurObject.data.link : null
        })
        .then(user => {
          console.log(user)
          res.status(200).send(user)
        })
        .catch(error => {
          console.log(error)
          res.status(404).end()
        })
      })
    // User.update(req.body, {
    //   where: {
    //     id: helpers.getUser(req).id
    //   }
    // })
    //   .then(() => {
    //     res.status(201).end()
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     res.status(404).end()
    //   })
  },
  follow (req, res) {
    if (req.body.UserId === helpers.getUser(req).id) {
      res.status(404).end()
    }
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
  unfollow (req, res) {
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
