const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model{}

Budget.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        income_amount: {
            type: DataTypes.DECIMAL
        },
        transaction_amount: {
            type: DataTypes.DECIMAL
        },
        date: {
            type: DataTypes.DATE
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'budget'
    }
);

module.exports = Budget;