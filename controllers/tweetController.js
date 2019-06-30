const db = require('../models')
const Tweet = db.Tweet
const User = db.User
const Reply = db.Reply

const tweetController = {
  getAllTweets(req, res) {
    Tweet.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] }
        },
        {
          model: Reply,
          include: {
            model: User,
            attributes: { exclude: ['password'] }
          }
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
          as: 'LikedUsers'
        }
      ]
    })
      .then(tweets => {
        res.status(200).send(tweets)
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  },
  postTweet(req, res) {
    Tweet.create({
      UserId: req.user.id,
      description: req.body.description
    })
      .then(tweet => res.status(201).end())
      .catch(error => res.status(404).end())
  },

  getTweet(req, res) {
    Tweet.findByPk(req.params.tweetId, {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] }
        },
        {
          model: Reply,
          include: {
            model: User,
            attributes: { exclude: ['password'] }
          }
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
          as: 'LikedUsers'
        }
      ]
    })
      .then(tweet => {
        res.status(200).send(tweet)
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  },
  replyTweet(req, res) {
    Reply.create({
      UserId: req.user.id,
      TweetId: req.params.tweetId,
      comment: req.body.comment
    })
      .then(() => {
        res.send(201).end()
      })
      .catch(error => {
        res.send(404).end()
      })
  }
}

module.exports = tweetController
