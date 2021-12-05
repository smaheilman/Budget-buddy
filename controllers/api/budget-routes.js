const router = require('express').Router();
<<<<<<< HEAD
const { User, Budget } = require('../../models');
// const sequelize = require('../../config/connection');
=======
const { User, Budget, Transaction } = require('../../models');
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff

// GET api/budget
router.get('/', (req, res) => {
    Budget.findAll({
<<<<<<< HEAD
      attributes: [
        //BUDGET DATA
      ],
=======
      attributes: ['id', 'total', 'amountSpent', 'amountSaved', 'amountRemaining'],
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: User,
<<<<<<< HEAD
          attributes: ['username']
=======
          attributes: ['username'],
          include: [
            {
              model: Transaction,
              attributes: ['id', 'date', 'amount', 'memo', 'category']
            }
          ]
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
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
<<<<<<< HEAD
      attributes: [
        //BUDGET DATA
      ],
      include: [
        {
          model: User,
          attributes: ['username']
=======
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
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
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
<<<<<<< HEAD
      //BUDGET DATA PARAM
=======
      user_id: req.body.user_id,
      total: req.body.total,
      amountSpent: req.body.amountSpent,
      amountSaved: req.body.amountSaved,
      amountRemaining: req.body.amountRemaining
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
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
<<<<<<< HEAD
        //BUDGET PARAM
      },
      {
=======
        user_id: req.body.user_id,
        total: req.body.total,
        amountSpent: req.body.amountSpent,
        amountSaved: req.body.amountSaved,
        amountRemaining: req.body.amountRemaining
      },
      {
        individualHooks: true,
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
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