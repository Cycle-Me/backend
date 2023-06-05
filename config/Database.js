import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db', 'myuser', 'mypass', {
    host: "35.225.237.23",
    dialect: "mysql"
});
export default db;
