const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = {}
db.url = "mongodb://0.0.0.0:27017/blog"
db.mongoose = mongoose
module.exports = db