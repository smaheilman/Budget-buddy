const { User } = require('../models');

const userData = [
  {
    user_name: "Kelbaccio",
    email: "kelbaccio@kelbach.com",
    password: "kelbaccio"
  },
  {
    user_name: 'Kelbach',
    email: "kelbach@kelbach.com",
    password: "kelbach"
  },
  {
    user_name: 'Kevin',
    email: "kevin@kelbach.com",
    password: "kevin"
  },
];

const seedUsers = () => User.bulkCreate(categoryData);

module.exports = seedUsers;
