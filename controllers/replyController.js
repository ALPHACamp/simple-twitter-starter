const db = require('../models')
const Reply = db.Reply
const User = db.User
const Tweet = db.Tweet
const Like = db.Like
const helpers = require('../_helpers')

let replyController = {
  postReply: (req, res) => {
    if (!req.body.comment) {
      req.flash('error_messages', 'comment didn\'t exist')
      return res.redirect('back')
    } else {
      return Reply.create({
        comment: req.body.comment,
        TweetId: req.params.tweet_id,
        UserId: helpers.getUser(req).id
      })
        .then((reply) => {
          res.redirect(`/tweets/${req.body.tweetId}/replies`)
        })
    }
  },
  getReply: (req, res) => {
    return Tweet.findByPk(req.params.tweet_id, {
      include: [
        {
          model: User, include: [
            Like,
            { model: User, as: 'Followers' },
            { model: User, as: 'Followings' }
          ]
        },
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