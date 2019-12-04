const bcrypt = require('bcrypt-nodejs')
const helpers = require('../_helpers')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Like = db.Like
const Followship = db.Followship

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

  addFollowing: (req, res) => {
    return Followship.create({
      followerId: helpers.getUser(req).id,
      followingId: req.params.followingId
    })
      .then((followship) => {
        console.log(helpers.getUser(req).id)
        return res.redirect('back')
      })
  },

  removeFollowing: (req, res) => {
    return Followship.findOne({
      where: {
        followerId: helpers.getUser(req).id
      }
    })
      .then((followship) => {
        console.log(followship)
        followship.destroy({
          where: {
            followerId: helpers.getUser(req).id,
            followingId: req.params.followingId
          }
        })
          .then((followship) => {
            return res.redirect('back')
          })
      })
  },

  getFollowings: (req, res) => {
    return User.findByPk(req.params.id, {
      include: [
        Tweet,
        Like,
        { model: User, as: "Followers" },
        { model: User, as: 'Followings' }
      ]
    }).then(profile => {
      profile.Followings = profile.Followings.map(following => ({
        ...following.dataValues,
        isFollowed: helpers.getUser(req).Followings.map(d => d.id).includes(following.id)
      }))
      console.log(helpers.getUser(req).id)
      return res.render('followings', {
        profile: profile,
        tweetNums: profile.Tweets.length,
        followers: profile.Followers.length,
        followings: profile.Followings.length,
        likedTweets: profile.Likes.length
      })
    })
  }
}

module.exports = userController