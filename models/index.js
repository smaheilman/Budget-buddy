// import all models
const budget = require('./budget');
const User = require('./user');
const transactions = require('./transactions');
const category = require('./category');

// create associations
User.hasMany(transactions, {
  foreignKey: 'user_id'
});

User.belongsToMany(budget, {
    through: transactions,
    as: 'transactions_budget',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });

  User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

budget.belongsToMany(User, {
  through: transactions,
  as: 'transactions_budget',
  foreignKey: 'budget_id',
  onDelete: 'SET NULL'
});

budget.hasMany(category, {
    foreignKey: 'budget_id'
  });

budget.hasMany(transactions, {
  foreignKey: 'budget_id'
});

category.belongsTo(budget, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

category.hasMany(transactions, {
    foreignKey: 'transactions_id',
    onDelete: 'SET NULL'
  });
  
  transactions.belongsTo(category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
  });



module.exports = { User, budget, transactions, category };