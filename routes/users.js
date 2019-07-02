const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/*
  prefix: "/users"
*/
router
  .route('')
  .get(userController.login)
  .put(userController.editProfile)

router.get('/top', userController.getTopTenUser)

router.route('/:id').get(userController.getUser)

module.exports = router
