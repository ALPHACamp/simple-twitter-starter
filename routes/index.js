const express = require('express')
const passport = require('passport')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.post('/login', passport.authenticate('local'), userController.login)
router.post('/register', userController.register)
router.use('/users', require('./users'))
router.use('/tweets', require('./tweets'))
// router.use('/admin', require('./admin'))

module.exports = router
