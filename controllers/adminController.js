const db = require('../models')
const User = db.User
const Tweet = db.Tweet

const adminController = {
  getAllUser (req, res) {
    User.findAll()
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
