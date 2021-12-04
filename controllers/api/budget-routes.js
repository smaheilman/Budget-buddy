const router = require('express').Router();
const { User, Budget, Transaction } = require('../../models');
const sequelize = require('../../config/connection');

// GET api/budget
router.post('/', (req, res) => {
    Budget.create({
        attributes: [
            'id',
            [sequelize.literal(```
            select monthly_income from user```), 'total'],
            [sequelize.literal(```
            SUM(amount)
            from user
            inner join transaction
            on transaction.user_id=user.id
            group by user.id```),'amountSpent'],
            //'amountSaved',
            [sequelize.literal(```
            select monthly_income - SUM(amount)
            from user
            inner join transaction
            on transaction.user_id=user.id
            group by user.id
          ```), 'amountRemaining']
        ],

        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username'],
                include: [
                    {
                        model: Transaction,
                        attributes: ['id', 'date', 'amount', 'memo', 'category']
                    }
                ]
            }
        ]
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET api/budget/:id
router.get('/:id', (req, res) => {
    Budget.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'total', 'amountSpent', 'amountSaved', 'amountRemaining'],
        include: [
            {
                model: User,
                attributes: ['username'],
                include: [
                    {
                        model: Transaction,
                        attributes: ['id', 'date', 'amount', 'memo', 'category']
                    }
                ]
            }
        ]
    })
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No Budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects {BUDGETOBJECT}
    Budget.create({
        user_id: req.body.user_id,
        total: req.body.total,
        amountSpent: req.body.amountSpent,
        amountSaved: req.body.amountSaved,
        amountRemaining: req.body.amountRemaining
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Budget.update(
        {
            user_id: req.body.user_id,
            total: req.body.total,
            amountSpent: req.body.amountSpent,
            amountSaved: req.body.amountSaved,
            amountRemaining: req.body.amountRemaining
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No Budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Budget.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No Budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;