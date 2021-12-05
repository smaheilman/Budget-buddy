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
<<<<<<< HEAD
=======
        total:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountSpent:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountSaved:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
        amountRemaining:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            
        validate:{
            isDecimal:true,
          }

        },
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
<<<<<<< HEAD
        },
        //DATA DATA DATA DATA DATA
=======
        }
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'budget'
    }
);

module.exports = Budget;