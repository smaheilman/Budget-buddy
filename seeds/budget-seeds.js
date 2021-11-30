const { budget } = require('../models');

const budgetdata = [
  {
    total: '5000',
    amount_spent: '2000',
    amount_saved:'2500',
    amount_remaining:'500',
    user_id: 1
  },

  {
    total: '5000',
    amount_spent: '2000',
    amount_saved:'3000',
    amount_remaining:'1000',
    user_id: 2
  },

  {
    total: '5000',
    amount_spent: '2000',
    amount_saved:'2000',
    amount_remaining:'1000',
    user_id: 3
  },
  
  {
    total: '5000',
    amount_spent: '1000',
    amount_saved:'3000',
    amount_remaining:'1000',
    user_id: 4
  },
];

const seedbudget = () => budget.bulkCreate(budgetdata);

module.exports = seedbudget;
