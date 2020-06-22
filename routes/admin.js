const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const tweetController = require('../controllers/tweetController')

/*
  prefix: "/admin"
*/
router.get('/tweets', tweetController.getAllTweets)
router.get('/users', adminController.getAllUser)
router.delete('/tweets/:tweetId', adminController.deleteTweet)

module.exports = router
