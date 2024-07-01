const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    uname: {
        type : String,
    },
    email: {
        type: String,
        unique : true
    },
    password: {
        type: String
    },
    contact:{
        type: Number
    }
})

const user = mongoose.model('user',userSchema)
module.exports = user