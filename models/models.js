const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Roles = sequelize.define("Roles",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, unique: true},
},{timestamps: false})

const Users = sequelize.define("Users",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
    id_role: {type: DataTypes.INTEGER},
},{timestamps: false})

const Tokens = sequelize.define("Tokens",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING},
    id_user: {type: DataTypes.INTEGER}
},{timestamps: false})

const Posts = sequelize.define("Posts",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Post: {type: DataTypes.STRING},
    id_users:{type: DataTypes.INTEGER}
},{timestamps: false})

// Roles.hasMany(Users);
// Users.belongsTo(Roles);

// Posts.hasMany(Users);
// Users.belongsTo(Posts);

module.exports ={
    Roles,
    Tokens,
    Users,
    Posts
}