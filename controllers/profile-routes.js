const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, User, Transaction } = require('../models');

router.get('/', (req, res) => {
    //console.log(req.session);
    //console.log('======================');
    console.log("user stuff");
    User.findAll({
        where: {
            username: req.session.username
        },
        attributes: [
            'id',
            'username',
            'monthly_income',
            'email',
            'password'
        ],
        include: [
            {
                model: Transaction,
                attributes: [ 'id', 'user_id', 'amount', 'date', 'memo', 'category'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbUserData => {
            const user = dbUserData.map(user => user.get({ plain: true }));
            res.render('profile', { user, loggedIn: true });
            console.log(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

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