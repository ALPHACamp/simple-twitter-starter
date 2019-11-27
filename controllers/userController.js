const db = require('../models')
const User = db.User
const Tweet = db.Tweet
const Reply = db.Reply

const userController = {
  getUserTweets: (req, res) => {
    return User.findByPk(req.params.id, {
      include: { model: Tweet, include: [Reply] }
    }).then(user => {
      console.log(user)
      const tweets = user.Tweets
      res.render('user/user', { user, tweets })
    })
  }
}

module.exports = userController
