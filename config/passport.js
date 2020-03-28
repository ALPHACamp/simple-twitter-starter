const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const db = require('../models')
const User = db.User


passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, username, password, done) => {
    User.findOne({ where: { email: username } }).then(user => {
      if (!user) return done(null, false, req.flash('error_messages', 'That email is not registered'))
      if (!bcrypt.compareSync(password, user.password)) return done(null, false, req.flash('error_messages', '密碼輸入錯誤！'))
      return done(null, user)
    })
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findByPk(id, {
    include: [
      { model: User, as: 'Followers' },
      { model: User, as: 'Followings' }
    ]
  })
    .then(user => {
      done(null, user)
    })
})


module.exports = passport