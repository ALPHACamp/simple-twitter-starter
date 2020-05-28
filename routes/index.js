const twitterController = require('../controllers/twitterController')
const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')

const multer = require('multer')
const upload = multer({ dest: 'temp/' })

module.exports = (app, passport) => {
  const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/signin')
  }
  const authenticatedAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
      if (req.user.role === 'Admin') { return next() }
      return res.redirect('/')
    }
    res.redirect('/signin')
  }

  app.get('/', (req, res) => res.redirect('/tweets'))
  app.get('/tweets', authenticated, twitterController.getTweets)

  app.get('/admin', (req, res) => res.redirect('/admin/tweets'))
  app.get('/admin/tweets', authenticated, adminController.getTweets)
  app.post('/admin/tweets/:id', authenticated, adminController.deleteTweets)

  /****  Register  ****/
  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)

  /****  Login  ****/
  app.get('/signin', userController.signInPage)
  app.post('/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      failureFlash: true
    }),
    userController.signIn
  )

  /****  Followship  ****/
  app.post('/followings/:followingId', authenticated, userController.addFollowing)
  app.delete('/followings/:followingId', authenticated, userController.removeFollowing)

  /****  User  ****/
  app.get('/users/:id/edit', authenticated, userController.editUser)
  app.put('/users/:id/edit', authenticated, upload.single('image'), userController.putUser)
  app.get('/users/:id/tweets', authenticated, userController.getUser)

}