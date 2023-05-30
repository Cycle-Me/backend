// const mysql = require('mysql');
import {Sequelize} from "sequelize";


// from course
// const connection = mysql.createConnection({
//     host: '34.101.146.163',
//     user: 'root',
//     database: 'auth_db',
//     password: '123'
// });

// from refference
const db = new Sequelize('auth_db', 'root', '123', {
    host: '34.101.146.163',
    dialect: 'mysql'
});

export default db;
