const userController = require('../controllers/userController.js')

module.exports = (app, passport) => {
  app.get('/', (req, res) => res.send('Hello World!'))
  // Sign up.in.out routes 
  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)
  app.get('/signin', userController.signInPage)
  app.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
  app.get('/logout', userController.logout)
}