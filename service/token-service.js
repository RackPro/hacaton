const jwt = require("jsonwebtoken");
const {Tokens} = require("../models/models");

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN,{
            expiresIn: "10m"
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN,{
            expiresIn: "1d"
        });
        return {accessToken, refreshToken};
    }
    async saveToken(idUser, refreshToken){
        let tokenData = await Tokens.findOne({where:{id_user: idUser}});
        if (tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        let token = await Tokens.create({id_user: idUser, refreshToken});
        return token;
    }
}

module.exports = new TokenService();