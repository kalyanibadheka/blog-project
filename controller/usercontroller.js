const usermodule = require('../modules/userschema')

module.exports.loginpage = (req,res) => {
    return res.render('login.ejs')
}
module.exports.registerpage = async (req,res) => {
    return res.render('register.ejs')
}

module.exports.reguser = async (req,res) =>{
    console.log(req.body);
    let user = await usermodule.findOne({ email : req.body.email})
    if(user){
        return res.send("email already existed")
    }
    try {
        await usermodule.create(req.body)
        return res.redirect('/user/login')
    } catch (error) {
        console.log(error);
    }
}

module.exports.loguser = async (req,res) => {
    const {email, password } = req.body
    console.log(req.body);
    try {
        let user = await usermodule.findOne({email})
        if(!user){
            res.send("Wrong email")
        }
        let pwd = await usermodule.findOne({ password })
        if(!pwd){
            res.send("Wrong pwd")
        }
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}