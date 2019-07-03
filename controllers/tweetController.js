const db = require('../models')
const Tweet = db.Tweet
const User = db.User
const Reply = db.Reply
const Like = db.Like
const helpers = require('../_helpers')

const tweetController = {
  getAllTweets(req, res) {
    Tweet.findAll({
      order: [['createdAt', 'DESC']],
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
    console.log(req.body)
    Tweet.create({
      UserId: helpers.getUser(req).id,
      description: req.body.description
    })
      .then(tweet => {
        return Tweet.findByPk(tweet.id, {
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
      })
      .then(tweet => {
        res.status(200).send(tweet)
      })
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
      UserId: helpers.getUser(req).id,
      TweetId: req.params.tweetId,
      comment: req.body.comment
    })
      .then(reply => {
        res.status(201).send(reply)
      })
      .catch(error => {
        res.status(404).end()
      })
  },
  likeTweet(req, res) {
    console.log('here', req.params)
    Like.create({
      UserId: helpers.getUser(req).id,
      TweetId: req.params.tweedId
    })
      .then(() => {
        res.status(200).end()
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  },
  unlikeTweet(req, res) {
    Like.destroy({
      where: {
        UserId: helpers.getUser(req).id,
        TweetId: req.params.tweedId
      }
    })
      .then(() => {
        res.status(200).end()
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  }
}

module.exports = tweetController
