const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, User, Transaction } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  console.log('======================');
  Transaction.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
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
      const transaction = dbTransactionData.map(transaction => transaction.get({ plain: true }));
      res.render('profile', { transaction, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//router.get('/edit/:id', withAuth, (req, res) => {
//  Post.findByPk(req.params.id, {
//    attributes: [
//      'id',
//      'post_url',
//      'title',
//      'created_at',
//      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//    ],
//    include: [
//      {
//        model: Comment,
//        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//        include: {
//          model: User,
//          attributes: ['username']
//        }
//      },
//      {
//        model: User,
//        attributes: ['username']
//      }
//    ]
//  })
//    .then(dbPostData => {
//      if (dbPostData) {
//        const post = dbPostData.get({ plain: true });
//        
//        res.render('edit-post', {
//          post,
//          loggedIn: true
//        });
//      } else {
//        res.status(404).end();
//      }
//    })
//    .catch(err => {
//      res.status(500).json(err);
//    });
//});

module.exports = router;