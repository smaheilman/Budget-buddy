// import all models
const Post = require('./budget');
const User = require('./user');
const Vote = require('./transactions');
const Comment = require('./category');

// create associations
User.hasMany(transactions, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
  
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



Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

category.belongsTo(budget, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});


category.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  transactions.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });



module.exports = { User, budget, transactions, category };