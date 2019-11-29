const tweetController = require('../controllers/tweetController.js')
const userController = require('../controllers/userController.js')
const adminController = require('../controllers/admin/adminController.js')

module.exports = (app, passport) => {
  app.get('/', (req, res) => { res.redirect('/tweets') })

  app.get('/tweets', tweetController.getTweets)

  // Sign up.in.out routes 
  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)
  app.get('/signin', userController.signInPage)
  app.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
  app.get('/logout', userController.logout)


  // admin routes
  app.get('/admin/tweets', adminController.getTweets)
  app.get('/admin/users', adminController.getUsers)

}