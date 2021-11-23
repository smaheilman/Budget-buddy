const router = require('express').Router();
const { User, Budget } = require('../../models');
// const sequelize = require('../../config/connection');

// GET api/budget
router.get('/', (req, res) => {
    Budget.findAll({
      attributes: [
        //BUDGET DATA
      ],
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: User,
          attributes: ['username']
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
      attributes: [
        //BUDGET DATA
      ],
      include: [
        {
          model: User,
          attributes: ['username']
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
      //BUDGET DATA PARAM
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
        //BUDGET PARAM
      },
      {
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