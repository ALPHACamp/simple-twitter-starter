const db = require('../../models')
const Tweet = db.Tweet
const User = db.User
const Reply = db.Reply
const Like = db.Like

const adminController = {
  getTweets: (req, res) => {
    return Tweet.findAll({ include: [User, { model: Reply, include: [User] }] }).then(tweets => {
      tweets = tweets.map(tweet => ({
        ...tweet.dataValues,
        username: tweet.dataValues.User.name,
        description: tweet.dataValues.description.substring(0, 50),
        comment: tweet.dataValues.Replies[0].dataValues.comment.substring(0, 50)
      }))
      return res.render('admin/tweets', { tweets: tweets })
    })
  },

  getUsers: (req, res) => {
    return User.findAll({
      include: [
        Tweet,
        Like,
        { model: User, as: "Followers" },
        { model: User, as: 'Followings' }
      ]
    }).then(users => {
      users = users.sort((a, b) => b.Tweets.length - a.Tweets.length)
      res.render('admin/users', { users: users })
    })
  }
}

module.exports = adminController