import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db', 'myuser', 'mypass', {
    host: "104.197.201.38",
    dialect: "mysql"
});
export default db;
