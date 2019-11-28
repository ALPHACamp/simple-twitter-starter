const tweetController = require('../controllers/tweetController.js')

module.exports = app => {
  app.get('/', (req, res) => { res.redirect('/tweets') })

  app.get('/tweets', tweetController.getTweets)
}