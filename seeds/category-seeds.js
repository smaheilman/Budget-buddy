const { catergory } = require('../models');

const categorydata = [
  {
    category_name: 'Bills',
  
  },
  {
    category_name: 'Shopping',
   
  },
  {
    category_name: 'Entertainment',
   
  },
],
  
const seedcategory = () => category.bulkCreate(categorydata);

module.exports = seedcategory;