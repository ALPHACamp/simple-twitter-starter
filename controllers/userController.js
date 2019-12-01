const bcrypt = require('bcrypt-nodejs')
const strftime = require('strftime')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet

const userController = {
  signUpPage: (req, res) => {
    return res.render('signup')
  },

  signUp: (req, res) => {
    // confirm password
    if (req.body.passwordCheck !== req.body.password) {
      req.flash('error_messages', '兩次密碼輸入不同！')
      return res.redirect('/signup')
    } else {
      // confirm unique user
      User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user) {
          req.flash('error_messages', '信箱重複！')
          return res.redirect('/signup')
        } else {
          User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
          }).then(user => {
            req.flash('success_messages', '成功註冊帳號！')
            return res.redirect('/signin')
          })
        }
      })
    }
  },
  signInPage: (req, res) => {
    return res.render('signin')
  },

  signIn: (req, res) => {
    req.flash('success_messages', '成功登入！')
    res.redirect('/tweets')
  },

  logout: (req, res) => {
    req.flash('success_messages', '登出成功！')
    req.logout()
    res.redirect('/signin')
  },

  getUser: (req, res) => {
    if (Number(req.params.id) === Number(req.user.id)) {
      //console.log('the same')
      return res.redirect('/tweets')
    } else {
      User.findByPk(req.params.id).then(user => {
        Tweet.findAll({ where: { UserId: user.id }, order: [['updatedAt', 'DESC']] }).then(tweets => {
          tweets = tweets.map((tweet) => ({
            ...tweet.dataValues,
            description: tweet.dataValues.description.substring(0, 140),
            createdAt: strftime('%Y-%m-%d, %H:%M', tweet.dataValues.createdAt),
            userName: user.name,
          }))
          //return res.json({ user: user, tweet: tweet })
          return res.render('user', { user: user, tweets: tweets, totalNums: tweets.length })
        })
      })
    }
  }



}

module.exports = userController