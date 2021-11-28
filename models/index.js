const User = require("./User");
const Income = require("./Income");
const Transaction = require("./Transaction");
const Budget = require("./Budget");
const Category = require('./Category')

User.hasMany(Income, {
    foreignkey: 'user_id'
});

Income.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Transaction, {
    foreignkey: 'user_id'
});

Transaction.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Budget, {
    foreignkey: 'user_id'
});

Budget.belongsTo(User, {
    foreignKey: 'user_id'
});

Budget.hasMany(Income, {
    foreignkey: 'income_id'
});

Income.belongsTo(Budget, {
    foreignKey: 'income_id'
});

Budget.hasMany(Transaction, {
    foreignkey: 'transaction_id'
});

Transaction.belongsTo(Budget, {
    foreignKey: 'transaction_id'
});

Category.hasMany(Transaction, {
    foreignKey: 'category_id'
})

Transaction.belongsTo(Category, {
    foreignkey: 'category_id'
})

module.exports = { User, Income, Transaction, Budget, Category};