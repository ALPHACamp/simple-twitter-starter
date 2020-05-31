const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'temp/' })
const passport = require('../config/passport')
const helpers = require('../_helpers')

const userController = require('../controllers/api/userController.js')
const tweetController = require('../controllers/api/tweetController.js')
const adminController = require('../controllers/api/adminController.js')

const authenticated = (req, res, next) => {
  if (helpers.ensureAuthenticated(req)) {
    return next()
  }
  passport.authenticate('jwt', { failureRedirect: '/signIn', session: false })(
    req,
    res,
    next
  )
}
const authenticatedAdmin = (req, res, next) => {
  let user = helpers.getUser(req)
  if (user) {
    if (user.role === 'admin') {
      return next()
    }
    return res
      .status(302)
      .json({ status: 'error', message: 'permission denied' })
  } else {
    return res.json({ status: 'error', message: 'permission denied' })
  }
}
const isOwner = (req, res, next) => {
  let user = helpers.getUser(req)
  if (String(user.id) === req.params.id) return next()
  return res.status(302).json({ status: 'error', message: '沒有修改權限' })
}

//User routes
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.get('/users/:id', authenticated, userController.getUser)
router.get('/users/:id/tweets', authenticated, userController.getTweets)
router.get('/users/:id/followers', authenticated, userController.getFollowers)
router.get('/users/:id/followings', authenticated, userController.getFollowings)
router.get('/users/:id/likes', authenticated, userController.getLikes)
router.get('/users/:id/edit', authenticated, isOwner, userController.getUser)
// 更新資料用POST 不符合RESTful路由設計 但TEST要過只能如此
router.post(
  '/users/:id/edit',
  authenticated,
  isOwner,
  upload.single('avatar'),
  userController.putUser
)

//Admin routes
router.get(
  '/admin/tweets',
  authenticated,
  authenticatedAdmin,
  adminController.getTweets
)
router.delete(
  '/admin/tweets/:id',
  authenticated,
  authenticatedAdmin,
  adminController.deleteTweet
)
router.get(
  '/admin/users',
  authenticated,
  authenticatedAdmin,
  adminController.getUsers
)

module.exports = router
