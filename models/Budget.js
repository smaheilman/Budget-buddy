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
        total:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountSpent:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountSaved:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountRemaining:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
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