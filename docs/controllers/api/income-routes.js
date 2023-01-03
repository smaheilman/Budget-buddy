const router = require('express').Router();
const { User, Income } = require('../../models');

// GET api/income
router.get('/', (req, res) => {
    Income.findAll({
      attributes: ['amount', 'date', 'memo'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbIncomeData => res.json(dbIncomeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET api/income/:id
router.get('/:id', (req, res) => {
    Income.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['amount', 'date', 'memo'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbIncomeData => {
        if (!dbIncomeData) {
          res.status(404).json({ message: 'No Income found with this id' });
          return;
        }
        res.json(dbIncomeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    // expects {IncomeOBJECT}
    Income.create({
      user_id: req.body.user_id,
      amount: req.body.amount,
      memo: req.body.memo
    })
      .then(dbIncomeData => res.json(dbIncomeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
    Income.update(
      {
        amount: req.body.amount,
        memo: req.body.memo
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbIncomeData => {
        if (!dbIncomeData) {
          res.status(404).json({ message: 'No Income found with this id' });
          return;
        }
        res.json(dbIncomeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
    Income.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbIncomeData => {
        if (!dbIncomeData) {
          res.status(404).json({ message: 'No Income found with this id' });
          return;
        }
        res.json(dbIncomeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;