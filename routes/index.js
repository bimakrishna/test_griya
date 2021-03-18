const router = require('express').Router()
const UserController = require('../controller/userController')
const BiodataController = require('../controller/biodataController')
const authentication = require('../middleware/authentication')

router.post('/register', UserController.register)
router.post('/login', UserController.login)


router.use(authentication.user)
router.get('/biodata', BiodataController.showBiodata)
router.post('/biodata', BiodataController.createBiodata)
router.put('/biodata/:id', BiodataController.editBiodata)
router.delete('/biodata/:id', BiodataController.destroyBiodata)

module.exports = router