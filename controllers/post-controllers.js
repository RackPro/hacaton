const {Posts} = require("../models/models");

class PostController{
    async posts(req,res){
        let result = await Posts.findAll();
        res.json(result);
    }
}

module.exports = new PostController();