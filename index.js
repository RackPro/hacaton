require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const router = require("./routers/index");
require("./models/models");
const app = express();

app.use(express.json());
app.use("/api", router);

(async()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:true}); //alter
        console.log("Подключено к БД");
        app.listen(process.env.PORT, ()=>{
            console.log(`Сервер запущен на ${process.env.PORT} порту`);
        })
    }catch(e){
        console.log(e);
    }
})();

