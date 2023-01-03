const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model{}


Transaction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull:false,    
        
        validate:{
          isDate:true
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
        type: DataTypes.DECIMAL(10,2),
        allowNull:false,    
        
        validate:{
          isDecimal:true
       }
      },
      memo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'transaction'
    }
);

module.exports = Transaction;