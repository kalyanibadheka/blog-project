const blogmodel = require('../modules/post')

module.exports.postform = (req,res) => {
    return res.render('postform.ejs')
}

module.exports.addpost = async (req,res) => {
    console.log(req.body);
    try {
        await blogmodel.create(req.body)
        return res.redirect("/");
    } catch (error) {
        console.log("Error+", error);
    }
}

module.exports.deletepost = async (req,res) => {
    console.log(req.params.id);
    const id = req.params.id;
    try {
        await blogmodel.findByIdAndDelete(id);
        return res.redirect('/')
    } catch (error) {
        console.log("error", error);
    }
}

module.exports.editpost = async (req,res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id
        const data = await blogmodel.findById(id)
        console.log(data);
        res.render("edit.ejs", {
            head : data.head,
            subhead: data.subhead,
            img : data.img,
            desc: data.desc,
            id: data._id
        })
        
    } catch (error) {
        console.log("edit err",error);        
    }
}

module.exports.updatepost = async (req,res) => {
    console.log(req.params.id,req.body);
    const id = req.params.id
    try {
        await blogmodel.findByIdAndUpdate(id,req.body)
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}