const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
<<<<<<< HEAD
=======
const profileRotues = require('./profile-routes');

router.use('/profile', profileRotues);
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

<<<<<<< HEAD
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

=======

module.exports = router;






>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
//might need to rename homeroutes