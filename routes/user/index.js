const express = require('express')
const routes = express.Router()
const usercontroller = require('../../controller/usercontroller')

routes.get('/login',usercontroller.loginpage)
routes.get('/register',usercontroller.registerpage)
routes.post('/reguser',usercontroller.reguser)
routes.post('/loguser',usercontroller.loguser)

module.exports = routes