const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('./config/passport')
// const FileStore = require('session-file-store')(session)
// const RedisStore = require('connect-redis')(session)
// const helpers = require('./_helpers')

const db = require('./models')
const app = express()
const port = 3000

// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated()

const origin = ['http://localhost:8080', 'http://localhost:3000']
const corsOptions = {
  origin: origin,
  credentials: true,
  maxAge: 1728000
}

app.use(cors(corsOptions))
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  session({
    // store: new FileStore(),
    // store: new RedisStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  if (req.method == 'GET' || Object.keys(req.body).length == 0) {
    return next()
  }
  req.body = JSON.parse(req.body)
  next()
})

app.use('/', require('./routes'))

app.listen(port, () => {
  db.sequelize.sync()
  console.log(`app is listening on http://localhost:${port}`)
})
