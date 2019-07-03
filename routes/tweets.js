const express = require('express')
const router = express.Router()
const tweetController = require('../controllers/tweetController')

/*
  prefix: "/tweets"
*/

router
  .route('')
  .get(tweetController.getAllTweets)
  .post(tweetController.postTweet)

router
  .route('/:tweetId/replies')
  .get(tweetController.getTweet)
  .post(tweetController.replyTweet)

router.post('/:tweedId/like', tweetController.likeTweet)
router.post('/:tweedId/unlike', tweetController.unlikeTweet)

module.exports = router
