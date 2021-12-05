<<<<<<< HEAD
const Sequelize = require('sequelize');

require('dotenv').config();

=======
require('dotenv').config();

const Sequelize = require('sequelize');

>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;