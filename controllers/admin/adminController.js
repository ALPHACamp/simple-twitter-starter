const db = require('../../models')
const Tweet = db.Tweet
const User = db.User


const adminController = {
  getTweets: (req, res) => {
    return Tweet.findAll({ include: [User] }).then(tweets => {
      tweets = tweets.map(tweet => ({
        ...tweet.dataValues,
        description: tweet.dataValues.description.substring(0, 50),
        username: tweet.dataValues.User.name
      }))
      console.log('tweets:', tweets)
      return res.render('admin/tweets', { tweets: tweets })
    })
  },

  getUsers: (req, res) => {
    return User.findAll().then(users => {
      res.render('admin/users', { users: users })
    })
  }
}

module.exports = adminController