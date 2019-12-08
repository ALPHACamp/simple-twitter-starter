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
          req.flash('error_messages', '用戶信箱重複！')
          return res.redirect('/signup')
        } else {
          User.findOne({ where: { name: req.body.name } }).then(user => {
            if (user) {
              req.flash('error_messages', '用戶名稱重複！')
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
          let isFollowed = ''
          if (Number(profile.id) === Number(helpers.getUser(req).id)) {
            isFollowed = 'self'
          } else {
            if (helpers.getUser(req).Followings.map(d => d.id).includes(profile.id)) {
              isFollowed = 'unfollow'
            } else {
              isFollowed = 'follow'
            }
          }
          tweets = tweets.map(tweet => ({
            ...tweet.dataValues,
            userName: profile.dataValues.name,
            replyNums: tweet.Replies.length,
            likeNums: tweet.Likes.length,
            description: tweet.dataValues.description.substring(0, 140),
            createdAt: strftime('%Y-%m-%d, %H:%M', tweet.dataValues.createdAt),
            isLiked: helpers.getUser(req).Likes.map(d => d.TweetId).includes(tweet.id)
          }))
          return res.render('user', {
            currentUser: currentUser,
            tweets: tweets,
            tweetNums: tweets.length,
            profile: profile,
            followers: profile.Followers.length,
            followings: profile.Followings.length,
            likedTweets: profile.Likes.length,
            isFollowed: isFollowed
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
              introduction: req.body.introduction,
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
            introduction: req.body.introduction,
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
      Followship.findAll({ where: { followerId: req.params.id } }).then((followships) => {
        profile.Followings = profile.Followings.map(following => ({
          ...following.dataValues,
          isFollowed: helpers.getUser(req).Followings.map(d => d.id).includes(following.id),
          createdAt: followships.find(element => element.followingId === following.id).createdAt
        })).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        let isFollowed = ''
        if (Number(profile.id) === Number(helpers.getUser(req).id)) {
          isFollowed = 'self'
        } else {
          if (helpers.getUser(req).Followings.map(d => d.id).includes(profile.id)) {
            isFollowed = 'unfollow'
          } else {
            isFollowed = 'follow'
          }
        }
        console.log(profile.Followings[0].createdAt)
        return res.render('followings', {
          profile: profile,
          tweetNums: profile.Tweets.length,
          followers: profile.Followers.length,
          followings: profile.Followings.length,
          likedTweets: profile.Likes.length,
          isFollowed: isFollowed
        })
      })
    })
  },

  getFollowers: (req, res) => {
    return User.findByPk(req.params.id, {
      include: [
        Tweet,
        Like,
        { model: User, as: "Followers" },
        { model: User, as: 'Followings' }
      ]
    }).then(profile => {
      Followship.findAll({ where: { followingId: req.params.id } }).then((followships) => {
        profile.Followers = profile.Followers.map(follower => ({
          ...follower.dataValues,
          isFollowed: helpers.getUser(req).Followings.map(d => d.id).includes(follower.id),
          createdAt: followships.find(element => element.followerId === follower.id).createdAt
        })).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        let isFollowed = ''
        if (Number(profile.id) === Number(helpers.getUser(req).id)) {
          isFollowed = 'self'
        } else {
          if (helpers.getUser(req).Followings.map(d => d.id).includes(profile.id)) {
            isFollowed = 'unfollow'
          } else {
            isFollowed = 'follow'
          }
        }
        return res.render('followers', {
          profile: profile,
          tweetNums: profile.Tweets.length,
          followers: profile.Followers.length,
          followings: profile.Followings.length,
          likedTweets: profile.Likes.length,
          isFollowed: isFollowed
        })
      })
    })
  },

  addLike: (req, res) => {
    return Like.create({
      UserId: helpers.getUser(req).id,
      TweetId: req.params.id
    })
      .then(tweet => {
        return res.redirect('back')
      })
  },

  removeLike: (req, res) => {
    Like.destroy({
      where: {
        UserId: helpers.getUser(req).id,
        TweetId: req.params.id
      }
    }).then(like => {

      return res.redirect('back')

    })
  },

  getLikes: (req, res) => {
    return User.findByPk(req.params.id, {
      include: [
        Tweet,
        { model: Like, include: [User, { model: Tweet, include: [Like, Reply, User] }] },
        { model: User, as: "Followers" },
        { model: User, as: 'Followings' }
      ]
    }).then(profile => {
      let isFollowed = ''
      if (Number(profile.id) === Number(helpers.getUser(req).id)) {
        isFollowed = 'self'
      } else {
        if (helpers.getUser(req).Followings.map(d => d.id).includes(profile.id)) {
          isFollowed = 'unfollow'
        } else {
          isFollowed = 'follow'
        }
      }
<<<<<<< HEAD
      profile.Likes = profile.Likes.map((like) => (
        {
          ...like.dataValues,
          description: like.Tweet === null ? null : like.Tweet.description.substring(0, 100),
          createdAt: like.Tweet === null ? null : strftime('%Y-%m-%d, %H:%M', like.Tweet.createdAt),
          userName: like.User.name,
          replyNums: like.Tweet === null ? null : like.Tweet.Replies.length,
          likeNums: like.Tweet === null ? null : like.Tweet.Likes.length
        }))

=======
      profile.Likes = profile.Likes.map((like) => ({
        ...like.dataValues,
        description: like.Tweet.description.substring(0, 100),
        createdAt: strftime('%Y-%m-%d, %H:%M', like.Tweet.createdAt),
        userName: like.Tweet.User.name,
        replyNums: like.Tweet.Replies.length,
        likeNums: like.Tweet.Likes.length,
        isLiked: like.Tweet.Likes.map(lik => lik.UserId).includes(helpers.getUser(req).id)
      })).sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
      console.log(helpers.getUser(req).Likes[0].Tweet)
>>>>>>> c3d7574e9b7bd05e397620f8436a1854c1dd9d95
      return res.render('likes', {
        profile: profile,
        tweetNums: profile.Tweets.length,
        followers: profile.Followers.length,
        followings: profile.Followings.length,
        likedTweets: profile.Likes.length,
        isFollowed: isFollowed
      })
    })
  },

}

module.exports = userController