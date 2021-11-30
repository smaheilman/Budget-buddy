const { Transaction } = require('../models');

const transactionData = [
  {
    user_id: 1,
    amount: 200,
    date: 11/11/2021,
    memo: 'New outfit',
    category_id: 3
  },
  {
    user_id: 1,
    amount: 350,
    date: 11/18/2021,
    memo: 'bills',
    category_id: 1
  },
  {
    user_id: 2,
    amount: 22.99,
    date:11/1/2021,
    memo: 'i spent the money the nice man on the street gave me',
    category_id: 2
  },
  {
    user_id: 3,
    amount: 2000,
    date: 11/30/2021,
    memo: 'spent the lotto money',
    category_id: 3
  },
  {
    user_id: 1,
    amount: 5,
    date: 11/30/2021,
    memo: 'spotted change for coffee',
    category_id: 3
  }
];

const seedTransactions = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransactions;
