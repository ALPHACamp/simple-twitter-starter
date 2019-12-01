const strftime = require('strftime')
const db = require('../models')
const User = db.User
const Tweet = db.Tweet

const tweetController = {
  getTweets: (req, res) => {
    return Tweet.findAll({ include: [User], order: [['updatedAt', 'DESC']] }).then(tweets => {
      tweets = tweets.map(tweet => ({
        ...tweet.dataValues,
        description: tweet.dataValues.description.substring(0, 140),
        createdAt: strftime('%Y-%m-%d, %H:%M', tweet.dataValues.createdAt)
      }))
      User.findAll({ limit: 10 }).then(users => {
        users = users.map(user => ({
          ...user.dataValues,
          introduction: user.dataValues.introduction != null ? user.dataValues.introduction.substring(0, 140) : null,
        }))
        return res.render('tweets', { users: users, tweets: tweets })
      })
    })
  },

  postTweet: (req, res) => {
    let content = req.body.description.trim()
    if (content.length === 0 || content.length > 120) {
      req.flash('error_messages', "Description cannot be blank or more than 120 words")
      return res.redirect('back')
    }
    return Tweet.create({
      UserId: req.user.id,
      description: req.body.description
    })
      .then((tweet) => {
        req.flash('success_messages', 'Tweet was successfully created')
        res.redirect('back')
      })
  }

}

module.exports = tweetController