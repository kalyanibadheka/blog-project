const express = require('express')
const router = express.Router()
const postcontroller = require('../controller/postcontroller')
const user = require('./user')

router.get('/postform',postcontroller.postform)
router.post('/addpost',postcontroller.addpost)
router.get('/deleteblog/:id',postcontroller.deletepost)
router.get('/editblog/:id',postcontroller.editpost)
router.post('/updateblog/:id',postcontroller.updatepost)
router.use('/user',user)

module.exports = router