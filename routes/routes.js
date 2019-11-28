const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const passport = require('../config/passport')
const tweetController = require('./../controllers/tweetController')
const adminController = require('./../controllers/adminController')
const replyController = require('./../controllers/replyController')

const authenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/signin')
}

const authenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role) {
      return next()
    }
    return res.redirect('/')
  }
  res.redirect('/signin')
}

router.get('/', authenticated, (req, res) => res.redirect('/tweets'))
router.get('/tweets', authenticated, tweetController.getTweets)
router.post('/tweets', authenticated, tweetController.postTweets)
router.get(
  '/tweets/:tweet_id/replies',
  authenticated,
  replyController.getTweetReply
)
router.post(
  '/tweets/:tweet_id/replies',
  authenticated,
  replyController.postTweetReply
)

router.get('/users/:id/tweets', authenticated, userController.getUserTweets)
router.get('/users/:id/followings', authenticated, (req, res) =>
  res.render('user/followings')
)
router.get('/users/:id/followers', authenticated, (req, res) =>
  res.render('user/followers')
)
router.post('/followships', authenticated, userController.addFollowing)
router.delete(
  '/followships/:followingId',
  authenticated,
  userController.removeFollowing
)
router.get('/users/:id/likes', authenticated, (req, res) =>
  res.render('user/like')
)
router.post('/tweets/:id/like', authenticated, (req, res) =>
  res.send('post /tweets/:id/like')
)
router.post('/tweets', authenticated, (req, res) =>
  res.send('post /tweets/:id/unlike')
)
router.get('/users/:id/edit', authenticated, userController.getUserEdit)
router.post('/users/:id/edit', authenticated, (req, res) =>
  res.send('post /users/:id/edit')
)
router.get('/admin/tweets', authenticatedAdmin, adminController.getTweets)
router.delete(
  '/admin/tweets/:id',
  authenticatedAdmin,
  adminController.deleteTweet
)

router.get('/admin', authenticatedAdmin, (req, res) =>
  res.redirect('/admin/tweets')
)
router.get('/admin/users', authenticatedAdmin, adminController.getUsers)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/signin', userController.signInPage)
router.post(
  '/signin',
  passport.authenticate('local', {
    failureRedirect: '/signin',
    failureFlash: true
  }),
  userController.signIn
)
router.get('/logout', userController.logout)
module.exports = router
