const express = require('express')
const db = require('./models')
// const helpers = require('./_helpers')

const app = express()
const port = 3000

// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
  db.sequelize.sync()
  console.log(`app is listening on http://localhost:${port}`)
})

module.exports = app
