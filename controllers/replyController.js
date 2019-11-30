const db = require('../models')
const Reply = db.Reply
const User = db.User
const Tweet = db.Tweet
const helpers = require('../_helpers')

let replyController = {
  postReply: (req, res) => {
    return Reply.create({
      comment: req.body.text,
      TweetId: req.body.tweetId,
      UserId: helpers.getUser(req).id
    })
      .then((reply) => {
        res.redirect(`/tweets/${req.body.tweetId}/replies`)
      })
  },
  getReply: (req, res) => {
    return Tweet.findByPk(req.params.tweet_id, {
      include: [
        { model: Reply, include: [User] }
      ]
    }).then(tweet => {
      return res.render('reply', {
        tweet: tweet
      })
    })
  }
}
module.exports = replyController