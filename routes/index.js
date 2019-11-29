const tweetController = require('../controllers/tweetController.js')

const adminController = require('../controllers/admin/adminController.js')

module.exports = app => {
  app.get('/', (req, res) => { res.redirect('/tweets') })

  app.get('/tweets', tweetController.getTweets)

  // admin routes
  app.get('/admin/tweets', adminController.getTweets)
  app.get('/admin/users', adminController.getUsers)
}