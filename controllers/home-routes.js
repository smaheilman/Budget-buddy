const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/transaction', (req, res) =>{
    res.render('transaction');
});

router.get('/profile', (req, res) =>{
    res.render('profile');
});
module.exports = router;