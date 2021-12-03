const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Budget, Transaction } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Transaction.findAll({
        where: {
            user_id:req.session.user_id
        },
        attributes: [
            'id',
            'memo',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Budget,
                attributes: ['total']
            }
        ]
    })
        .then(dbTransactionData => {
            const transaction = dbTransactionData.map(transaction => transaction.get({ plain: true }));

            res.render('profile', {
                transaction,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;