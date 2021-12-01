const router = require('express').Router();
const { User, Transaction, Category } = require('../../models');

// GET api/transaction
router.get('/', (req, res) => {
    Transaction.findAll({
      attributes: ['id', 'date', 'amount', 'memo_text'],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Category,
          attributes: ['category_name']
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
      attributes: ['id', 'date', 'amount', 'memo_text'],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Category,
          attributes: ['category_name']
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
      user_id: req.body.user_id,
      amount: req.body.amount,
      date: req.body.date,
      memo_text: req.body.memo_text,
      category_id: req.body.category_id
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
        user_id: req.body.user_id,
        amount: req.body.amount,
        date: req.body.date,
        memo_text: req.body.memo_text,
        category_id: req.body.category_id
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