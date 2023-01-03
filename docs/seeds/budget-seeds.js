const { Budget } = require('../models');

const budgetData = [
  {
    user_id: 1,
    income_amount: 1105,
    transaction_amount: 555
  },
  {
    user_id: 2,
    income_amount: 22.99,
    transaction_amount: 22.99
  },
  {
    user_id: 3,
    income_amount: 2000,
    transaction_amount: 2000
  }
];

const seedBudgets = () => Budget.bulkCreate(budgetData);

module.exports = seedBudgets;
