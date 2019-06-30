const passport = require('passport')
const LocalStrategy = require('passport-local')
const crypto = require('crypto')
const db = require('../models')
const User = db.User

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (username, password, cb) => {
      User.findOne({ where: { email: username } })
        .then(user => {
          if (!user) {
            return cb(null, false, 404)
          }
          password = crypto
            .createHash('md5')
            .update(password, 'utf8')
            .digest('hex')
          if (password !== user.password) {
            return cb(null, false, 401)
          }
          delete user.dataValues.password
          return cb(null, user)
        })
        .catch(console.log)
    }
  )
)

passport.serializeUser((user, cb) => {
  console.log('serial')
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  console.log('deserial')
  User.findByPk(id).then(user => {
    return cb(null, user)
  })
})

module.exports = passport
