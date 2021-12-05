const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, User, Transaction } = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    //console.log(req.session);
    //console.log('======================');
    // console.log("user stuff");
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
                attributes: ['id', 'user_id', 'amount', 'date', 'memo', 'category'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbUserData => {
            let user = dbUserData.map(user => user.get({ plain: true }));
            let entAmount = [0];
            let buAmount = [0];
            let shopAmount = [0];
            let otherAmount = [0];
            const reducer = (prev, current) => parseInt(prev) + parseInt(current);
                
            // logic here to update user object
            user[0].transactions.map( (item) => {
                if (item.category === "Entertainment") {
                    entAmount.push(item.amount)  
                }
                if (item.category === "Bills/Utilities") {
                    buAmount.push(item.amount)
                }
                if (item.category === "Shopping") {
                    shopAmount.push(item.amount)
                }
                if (item.category === "Other") {
                    otherAmount.push(item.amount)
                }

            })

            entAmount = entAmount.reduce(reducer);
            buAmount = buAmount.reduce(reducer);
            shopAmount = shopAmount.reduce(reducer);
            otherAmount = otherAmount.reduce(reducer);
            let transAmount = buAmount + entAmount + shopAmount + otherAmount;

            let totals = [({ transTotal: transAmount, buTotal: buAmount, entTotal: entAmount, shopTotal: shopAmount, otherTotal: otherAmount })];
            console.log(totals);
            

            res.render('profile', { totals, user, loggedIn: true });
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/edit/:id', withAuth, (req, res) => {
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