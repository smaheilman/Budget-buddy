const router = require('express').Router();
const { User, Budget, Transaction, Income, Category } = require('../../models');

// GET api/budget
router.get('/', (req, res) => {
    Budget.findAll({
      attributes: ['user_id', 'income_amount', 'transaction_amount', 'date'],
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: Income,
              attributes: ['id', 'amount', 'date', 'memo']
            },
            {
              model: Transaction,
              attributes: ['id', 'amount', 'date', 'memo'],
              include: [
                {
                  model: Category,
                  attributes: [category_name]
                }
              ]
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
      attributes: ['user_id', 'income_amount', 'transaction_amount', 'date'],
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: Income,
              attributes: ['id', 'amount', 'date', 'memo']
            },
            {
              model: Transaction,
              attributes: ['id', 'amount', 'date', 'memo'],
              include: [
                {
                  model: Category,
                  attributes: [category_name]
                }
              ]
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
      income_amount: req.body.income_amount,
      transaction_amount: req.body.transaction_amount,
      date: req.body.user_id
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
        income_amount: req.body.income_amount,
        transaction_amount: req.body.transaction_amount,
        date: req.body.date
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