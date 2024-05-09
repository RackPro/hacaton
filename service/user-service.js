const {Users} = require("../models/models");
const bcrupt = require("bcrypt");
const tokenService = require("./token-service");

class UserService{
    async registration(email, password){
        let user = await Users.findOne({where: {email:email}});
        if (user){
            //Ошибка, пользователь есть
            console.log("Пользователь есть");
        }
        const hashpas = await bcrupt.hash(password, 3);
        console.log(hashpas);
        user = await Users.create({email, password: hashpas, id_role: 0});
        const tokens = tokenService.generateTokens({user}); //генерируем токен
        await tokenService.saveToken(user.dataValues.id, tokens.refreshToken);
        return {...tokens, ...user};
    }
    async login(){}
    async logout(){}
}

module.exports = new UserService();