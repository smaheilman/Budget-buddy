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
            type:DataTypes.Decimal,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amount_spent:{
            type:DataTypes.Decimal,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amount_saved:{
            type:DataTypes.Decimal,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amount_remaining:{
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