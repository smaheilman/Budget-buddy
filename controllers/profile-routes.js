const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Budget } = require('../models');

router.get('/', (req, res)=> {
    console.log(req.session);
    console.log('================');
    Budget.findAll({
        where:{
            user_id: req.session.user_id
        },
    })
})