const seedUsers = require('./user-seeds');
const seedIncomes = require('./income-seeds');
const seedTransactions = require('./transaction-seeds');
const seedBudgets = require('./budget-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedIncomes();
  console.log('\n----- INCOME SEEDED -----\n');

  await seedTransactions();
  console.log('\n----- TRANSACTIONS SEEDED -----\n');

  await seedBudgets();
  console.log('\n----- BUDGETS SEEDED -----\n');

  process.exit(0);
};

seedAll();
