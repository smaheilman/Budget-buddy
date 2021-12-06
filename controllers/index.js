const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRotues = require('./profile-routes');

router.use('/profile', profileRotues);

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

<<<<<<< HEAD
router.use((req, res) => {
    res.redirect('/');
  });
=======
>>>>>>> a8da50663bc283146d1f7d54a7cabc6bbf72f6a4

module.exports = router;






//might need to rename homeroutes