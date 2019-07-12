const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Reply = db.Reply

const adminController = {
  getAllUser (req, res) {
    User.findAll({
      include: [
        {
          model: Tweet,
          include: [
            Reply,
            {
              model: User,
              attributes: { exclude: ['password'] },
              as: 'LikedUsers'
            }
          ]
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
          as: 'Followings'
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
          as: 'Followers'
        },
        {
          model: Tweet,
          as: 'LikedTweets',
          include: {
            model: User,
            attributes: { exclude: ['password'] }
          }
        }
      ]
    })
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error => {
        console.log(error)
        res.status(404).end()
      })
  },
  deleteTweet (req, res) {
    Tweet.destroy({
      where: {
        id: req.params.tweetId
      }
    }).then(() => {
      res.status(200).end()
    })
  }
}

module.exports = adminController
