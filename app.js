const express = require('express')
const handlebars = require('express-handlebars')
const helpers = require('./_helpers')
const db = require('./models')

const app = express()
const port = 3010

// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated()

//app.get('/', (req, res) => res.send('Hello World!'))
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//module.exports = app
require('./routes')(app)