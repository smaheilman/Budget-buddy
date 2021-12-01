const router = require('express').Router();
const { User, Budget, Transaction, Category } = require('../../models');

// GET api/budget
router.get('/', (req, res) => {
    Budget.findAll({
      attributes: ['id', 'total', 'amountSpent', 'amountSaved', 'amountRemaining'],
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: Transaction,
              attributes: ['id', 'date', 'amount', 'memo_text'],
              include: [
                {
                  model: Category,
                  attributes: ['category_name']
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
      attributes: ['id', 'total', 'amountSpent', 'amountSaved', 'amountRemaining'],
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: Transaction,
              attributes: ['id', 'date', 'amount', 'memo_text'],
              include: [
                {
                  model: Category,
                  attributes: ['category_name']
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