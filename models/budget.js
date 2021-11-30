const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model{}

Budgets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        total:{
            type:DataTypes.Decimal,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountSpent:{
            type:DataTypes.Decimal,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountSaved:{
            type:DataTypes.Decimal,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountRemaining:{
            type:DataTypes.Decimal,
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
        },
        //DATA DATA DATA DATA DATA
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'bills'
    }
);

module.exports = Budget;