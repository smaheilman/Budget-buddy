const { Income } = require('../models');

const incomeData = [
  {
    user_id: 1,
    amount: 500,
    date: 11/10/2021,
    memo: 'Birthday'
  },
  {
    user_id: 1,
    amount: 600,
    date: 11/17/2021,
    memo: 'job'
  },
  {
    user_id: 2,
    amount: 22.99,
    date:11/1/2021,
    memo: 'nice man gave me money on the street'
  },
  {
    user_id: 3,
    amount: 2000,
    date: 11/30/2021,
    memo: 'won the lotto'
  },
  {
    user_id: 1,
    amount: 5,
    date: 11/30/2021,
    memo: 'spotted change for coffee'
  }
];

const seedIncomes = () => Income.bulkCreate(incomeData);

module.exports = seedIncomes;
