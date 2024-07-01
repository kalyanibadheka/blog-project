const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db')
const router = require('./routes')
const blogmodel = require('./modules/post')

app.use(bodyParser())
app.set('view engine','ejs')
app.use(express.static('public'))

db.mongoose.connect(db.url).then(()=>{
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
})

app.get('/', async (req,res) => {
    const data = await blogmodel.find({})
    res.render('index.ejs',{
        data
    })
})

app.use(router)

app.listen(4004, ()=> {
    console.log("Server connected on 4004");
})