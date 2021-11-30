const seeduser = require('./user-seeds');
const seedbudget = require('./budget-seeds');
const seedcategory = require('./category-seeds');
const seedtransactions = require('./transactions-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seeduser();
  console.log('--------------');

  await seedbudget();
  console.log('--------------');

  await seedcategory();
  console.log('--------------');

  await seedtransactions();
  console.log('--------------');

  process.exit(0);
};

seedAll();
