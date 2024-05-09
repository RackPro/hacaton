const userService = require("../service/user-service");

class UserController{
    async registration(req,res,next){
        try{
            let {email, password} = await req.body;
            const userData = await userService.registration(email, password);
            res.cookie("refreshToken", userData.refreshToken,{
                maxAge: 1*24*60*60*1000,
                httpOnly: true
            });
            return res.json(userData);
        }catch(e){
            next(e);
        }
    }
}

module.exports = new UserController();