const adminController = require('../controllers/adminController.js')
const userController = require('../controllers/userController.js')
const tweetController = require('../controllers/tweetController')

module.exports = (app, passport) => {
  const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/signin')
  }
  const authenticatedAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
      if (req.user.role === 'admin') return next()
      return res.redirect('/')
    }
    res.redirect('/signin')
  }

  app.get('/admin/tweets', authenticatedAdmin, adminController.getTweets)
  app.delete(
    '/admin/tweets/:id/delete',
    authenticatedAdmin,
    adminController.deleteTweet
  )

  app.get('/', authenticated, (req, res) => res.redirect('/tweets'))
  app.get('/tweets', authenticated, tweetController.getTweet)
  app.post('/tweets', authenticated, tweetController.postTweet)

  app.post('/tweets/:id/like', authenticated, userController.like)
  app.post('/tweets/:id/unlike', authenticated, userController.unlike)

  app.get('/admin/users', authenticatedAdmin, adminController.getUsers)

  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)

  app.get('/signin', userController.signInPage)
  app.post(
    '/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      failureFlash: true
    }),
    userController.signIn
  )

  app.get('/logout', userController.logout)

  app.get('/user/api/v1', userController.getUserAPI)
}
