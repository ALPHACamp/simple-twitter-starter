const strftime = require('strftime')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID
const imgur = require('imgur-node-api')
const fs = require('fs')
const bcrypt = require('bcrypt-nodejs')
const helpers = require('../_helpers')
const strftime = require('strftime')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Like = db.Like
const Reply = db.Reply
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


  getUser: (req, res) => {
    const currentUser = helpers.getUser(req).id
    return User.findByPk(req.params.id, {
      include: [Like, { model: User, as: "Followers" },
        { model: User, as: "Followings" }
      ]
    })
      .then(profile => {
        Tweet.findAll({
          where: { UserId: req.params.id },
          order: [
            ['updatedAt', 'DESC']
          ],
          include: [Like, Reply]
        }).then(tweets => {
          tweets = tweets.map(tweet => ({
            ...tweet.dataValues,
            userName: profile.dataValues.name,
            replyNums: tweet.Replies.length,
            likeNums: tweet.Likes.length,
            description: tweet.dataValues.description.substring(0, 140),
            createdAt: strftime('%Y-%m-%d, %H:%M', tweet.dataValues.createdAt)
          }))
          return res.render('user', {
            currentUser: currentUser,
            tweets: tweets,
            tweetNums: tweets.length,
            profile: profile,
            followers: profile.Followers.length,
            followings: profile.Followings.length,
            likedTweets: profile.Likes.length
          })
        })
      })
  },

  editUser: (req, res) => {
    User.findByPk(req.params.id).then(user => {
      if (helpers.getUser(req).id === user.id) {
        return res.render('editUser', { user: user })
      } else {
        req.flash('error_messages', `You are not authorized to access other user's profile`)
        return res.redirect('back')
      }
    })
  },

  putUser: (req, res) => {
    const { file } = req
    const authUser = helpers.getUser(req).id
    if (authUser !== Number(req.params.id)) {
      req.flash('error_messages', `You are not authorized to access other user's profile`)
      return res.redirect(`/users/${req.params.id}`)
    }
    if (file) {
      imgur.setClientID(IMGUR_CLIENT_ID);
      imgur.upload(file.path, (err, img) => {
        return User.findByPk(req.params.id)
          .then((user) => {
            user.update({
              name: req.body.name,
              avatar: file ? img.data.link : user.avatar,
            })
              .then((user) => {
                req.flash('success_messages', 'User was successfully to update')
                return res.redirect(`/users/${req.params.id}/edit`)
              })
          })
      })
    } else {
      return User.findByPk(req.params.id)
        .then((user) => {
          user.update({
            name: req.body.name,
            avatar: user.avatar,
          })
            .then((user) => {
              req.flash('success_messages', 'User was successfully to update')
              return res.redirect(`/users/${req.params.id}/edit`)
            })
        })
    }
  },

  addFollowing: (req, res) => {
    if (Number(req.params.followingId) === Number(helpers.getUser(req).id)) {
      console.log('if', req.params.followingId, helpers.getUser(req).id)
      return res.redirect('back')
    } else {
      return Followship.create({
        followerId: helpers.getUser(req).id,
        followingId: req.params.followingId
      }).then((followship) => {
        console.log(helpers.getUser(req).id)
        return res.redirect('back')
      })
    }
  },

  removeFollowing: (req, res) => {
    return Followship.destroy({
      where: {
        followerId: helpers.getUser(req).id,
        followingId: req.params.followingId
      }
    }).then((followship) => {
      console.log(helpers.getUser(req).id)
      console.log('rm', followship)
      //followship.destroy().then(followship => {
      return res.redirect('back')
      //})
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