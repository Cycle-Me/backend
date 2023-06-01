import {Sequelize} from "sequelize";
// from refference
const db = new Sequelize('auth_db', 'root', '123', {
    host: '34.31.152.2',
    dialect: 'mysql'
});

export default db;
