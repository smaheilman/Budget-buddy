const { transactions } = require('../models');

const transactionsdata = [
  {
    user_id: '4',
    budget_id: '3',
    date:'11-25-21',
    amount:'500',
    memo_text:'insurance',
    category:'1'
  },

  {
    user_id: '1',
    budget_id: '1',
    date:'04-25-21',
    amount:'1500',
    memo_text:'weekend getaway',
    category:'3'
  },

  {
    user_id: '2',
    budget_id: '1',
    date:'11-01-21',
    amount:'2500',
    memo_text:'mortgage',
    category:'1'
  },
  
  {
    user_id: '3',
    budget_id: '4',
    date:'11-01-21',
    amount:'600',
    memo_text:'groceries',
    category_id:'2'
  },
];

const seedtransactions = () => transactions.bulkCreate(transactionsdata);

module.exports = seedtransactions;
