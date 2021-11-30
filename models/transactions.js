const { Model, DataTypes } = require('sequelize');
const { transactions } = require('.');
const sequelize = require('../config/connection');

class Transaction extends Model{}

transactions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
          type: DataType.date,
        allowNull:false,    
        
        validate:{
          isdate:true,
        }
      },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        amount: {
          type: DataTypes.DECIMAL,
        allowNull:false,    
        
        validate:{
          isDecimal:true,
        }
      },
        memo_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        //DATA DATA DATA DATA DATA
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Transaction'
    }
);

module.exports = Transaction;