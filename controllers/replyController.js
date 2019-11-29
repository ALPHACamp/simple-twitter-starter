const db = require('../models')
const Reply = db.Reply
const helpers = require('./_helpers')

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
  }
}
module.exports = replyController