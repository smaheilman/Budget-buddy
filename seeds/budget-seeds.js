const { Budget } = require('../models');

const budgetData = [
  {
    user_id: 1,
    income_amount: 1105,
    transaction_amount: 555,
    date: "2021-11-10 10:30:45"
  },
  {
    user_id: 2,
    income_amount: 22.99,
    transaction_amount: 22.99,
    date: "2021-11-10 11:30:45"
  },
  {
    user_id: 3,
    income_amount: 2000,
    transaction_amount: 2000,
    date: "2021-11-10 14:30:45"
  }
];

const seedBudgets = () => Budget.bulkCreate(budgetData);

module.exports = seedBudgets;
