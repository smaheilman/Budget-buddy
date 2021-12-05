// import all models
const User = require("./User");
const Transaction = require("./Transaction");
const Budget = require("./Budget");

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

Budget.hasMany(Transaction, {
    foreignkey: 'transaction_id'
});

Transaction.belongsTo(Budget, {
    foreignKey: 'transaction_id'
});

module.exports = { User, Transaction, Budget };
