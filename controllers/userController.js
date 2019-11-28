const bcrypt = require('bcrypt-nodejs')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Reply = db.Reply
const Followship = db.Followship
const { Op } = (sequelize = require('sequelize'))

let userController = {
  signInPage: (req, res) => {
    return res.render('signin')
  },
  signIn: (req, res) => {
    req.flash('success_messages', '成功登入')
    return res.redirect('/tweets')
  },
  signUpPage: (req, res) => {
    return res.render('signup')
  },
  signUp: (req, res) => {
    if (req.body.passwordCheck != req.body.password) {
      req.flash('error_messages', '兩次密碼輸入不同')
      return res.redirect('/signup')
    } else {
      const { name, email, password, passwordCheck } = req.body
      if (!name || !email || !password || !passwordCheck) {
        return req.flash('error_messages', '所有欄位皆為必填')
      }
      User.findOne({
        where: {
          [Op.or]: [{ email }, { name }]
        }
      }).then(user => {
        if (user) {
          let errors = []
          errors.push({ message: '使用者名稱或信箱重複' })
          return res.render('signup', { errors, name, email })
        } else {
          User.create({
            name,
            email,
            password: bcrypt.hashSync(
              req.body.password,
              bcrypt.genSaltSync(10),
              null
            )
          }).then(user => {
            return res.redirect('/signin')
          })
        }
      })
    }
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功')
    req.logout()
    res.redirect('/signin')
  },
  getUserTweets: (req, res) => {
    return User.findByPk(req.params.id, {
      include: [
        { model: Tweet, include: [Reply] },
        { model: User, as: 'Followers' },
        { model: User, as: 'Followings' }
      ]
    }).then(user => {
      const isFollowed = user.Followers.map(d => d.id).includes(req.user.id)
      const tweets = user.Tweets
      const isCurrentUser = +req.user.id === +req.params.id ? true : false
      res.render('user/user', { user, tweets, isCurrentUser, isFollowed })
    })
  },

  getUserEdit: (req, res) => {
    return User.findByPk(req.params.id).then(user => {
      res.render('user/edit', { user })
    })
  },

  getUserFollowings: (req, res) => {
    return User.findByPk(req.params.id).then(user => {
      res.render('user/followings', { user })
    })
  },

  getUserFollowers: (req, res) => {
    return User.findByPk(req.params.id).then(user => {
      res.render('user/followers', { user })
    })
  },

  addFollowing: (req, res) => {
    return Followship.create({
      followerId: req.user.id,
      followingId: req.body.id
    }).then(followship => {
      return res.redirect('back')
    })
  },

  removeFollowing: (req, res) => {
    return Followship.findOne({
      where: {
        followerId: req.user.id,
        followingId: req.params.followingId
      }
    })
      .then(followship => {
        followship.destroy()
      })
      .then(followship => {
        return res.redirect('back')
      })
  }
}

module.exports = userController
