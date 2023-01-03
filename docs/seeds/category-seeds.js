const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Bills and Utilities',
  },
  {
    category_name: 'Entertainment',
  },
  {
    category_name: 'Shopping',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
