const router = require('express').Router();
const { User, Transaction } = require('../../models');

// GET api/transaction
router.get('/', (req, res) => {
    Transaction.findAll({
      attributes: ['id', 'date', 'amount', 'memo', 'category'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbTransactionData => res.json(dbTransactionData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET api/transaction/:id
router.get('/:id', (req, res) => {
    Transaction.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'date', 'amount', 'memo', 'category'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbTransactionData => {
        if (!dbTransactionData) {
          res.status(404).json({ message: 'No Transaction found with this id' });
          return;
        }
        res.json(dbTransactionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    // expects {TransactionOBJECT}
    Transaction.create({
      user_id: req.session.user_id,
      amount: req.body.amount,
      date: req.body.date,
      memo: req.body.memo,
      category: req.body.category
    })
      .then(dbTransactionData => res.json(dbTransactionData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
    Transaction.update(
      {
        amount: req.body.amount,
        date: req.body.date,
        memo: req.body.memo,
        category: req.body.category
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbTransactionData => {
        if (!dbTransactionData) {
          res.status(404).json({ message: 'No Transaction found with this id' });
          return;
        }
        res.json(dbTransactionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
  ci
    Transaction.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbTransactionData => {
        if (!dbTransactionData) {
          res.status(404).json({ message: 'No Transaction found with this id' });
          return;
        }
        res.json(dbTransactionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;