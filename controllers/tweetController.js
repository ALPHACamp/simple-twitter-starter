const db = require('../models')
const strftime = require('strftime')
const Tweet = db.Tweet
const User = db.User

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
          introduction: user.dataValues.introduction.substring(0, 100)
        }))
        return res.render('tweets', { users: users, tweets: tweets })
      })
    })
  }

}

module.exports = tweetController