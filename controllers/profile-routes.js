const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, User, Transaction } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    console.log('======================');
    Transaction.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'amount',
            'date',
            'memo',
            'category'
        ],
        include: [
            {
                model: User,
                attributes: ['username', 'monthly_income']
            }
        ]
    })
        .then(dbTransactionData => {
            const transaction = dbTransactionData.map(transaction => transaction.get({ plain: true }));
            console.log("this is trans data", dbTransactionData[0].dataValues.user.dataValues.username)
            res.render('profile', { transaction, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/', (req, res) => {
    User.findAll({
        where: {
            id: req.session.id
        },
        attributes: [
            'username',
            'email',
            'monthly_income'
        ]
    });
});

router.get('/edit/:id', (req, res) => {
    Transaction.findByPk(req.params.id, {
        attributes: [
            'id',
            'amount',
            'date',
            'memo',
            'category'
        ],
        include: [
            {
                model: User,
                attributes: ['username', 'monthly_income']
            }
        ]
    })
        .then(dbTransactionData => {
            if (dbTransactionData) {
                const transaction = dbTransactionData.get({ plain: true });

                res.render('edit-transaction', {
                    transaction,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;