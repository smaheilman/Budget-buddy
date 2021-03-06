const router = require('express').Router();
const { Budget, User, Transaction } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get('/transaction', withAuth, (req, res) =>{
    res.render('transaction');
});

module.exports = router;