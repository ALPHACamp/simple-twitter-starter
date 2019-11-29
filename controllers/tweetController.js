const db = require('../models')
const Tweet = db.Tweet

const tweetController = {
  getTweets: (req, res) => {
    return res.render('tweets')
  },

  postTweet: (req, res) => {
    let content = req.query.description.trim()
    if (content.length === 0 || content.length > 120) {
      req.flash('error_messages', "Description cannot be blank or more than 120 words")
      return res.redirect('back')
    }
    return Tweet.create({
        UserId: req.query.userId,
        description: req.query.description
      })
      .then((tweet) => {
        req.flash('success_messages', 'Tweet was successfully created')
        res.redirect('back')
      })
  }

}

module.exports = tweetController