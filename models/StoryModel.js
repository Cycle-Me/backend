// CREATE PRODUCT TABLE
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
const {DataTypes} = Sequelize;

const Story = db.define('story',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    attachment:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        validate:{
            notEmpty:false
        }
    },
},{
    freezeTableName: true
});

Users.hasMany(Story);
Story.belongsTo(Users, {foreignKey: 'userId'});

export default Story;
