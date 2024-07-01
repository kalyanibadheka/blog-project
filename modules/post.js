const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    head:{
        type: String,
        default: 'demo',
        require: true
    },
    subhead:{
        type: String,
        default: 'demo',
        require: true
    },
    img:{
        type: String,
        default: 'https://source.unsplash.com/WLUHO9A_xik/1600x900',
        require: true
    },
    desc:{
        type: String,
        default: 'demo',
        require: true
    }
})

const blogmodel = mongoose.model('blogpost',blogSchema)
module.exports = blogmodel