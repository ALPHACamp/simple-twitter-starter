const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const multer = require('multer')
const upload = multer({ dest: 'temp/' })

/*
  prefix: "/users"
*/
router
  .route('')
  .get(userController.login)
  .put(upload.single('file'), userController.editProfile)

router.get('/top', userController.getTopTenUser)

router.route('/:id').get(userController.getUser)

module.exports = router
