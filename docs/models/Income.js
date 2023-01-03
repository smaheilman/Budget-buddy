const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model{}

Income.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        memo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'income'  
    }
)

module.exports = Income;