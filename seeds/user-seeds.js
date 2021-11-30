const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'dm1',
    email: 'dm1@bb.com',
    password: 'password123',
    mothly_income:'5000'
  },
  {
    username: 'sh1',
    email: 'sh1@bb.com',
    password: 'password123',
    mothly_income:'5000'
  },
  {
    username: 'kk1',
    email: 'kk1@bb.com',
    password: 'password123',
    mothly_income:'5000'
  },
  {
    username: 'st1',
    email: 'st1@bb.com',
    password: 'password123',
    mothly_income:'5000'
  },
  
];

const seeduser = () => user.bulkCreate(userdata, {individualHooks: true});

module.exports = seeduser;