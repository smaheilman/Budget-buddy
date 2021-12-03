const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRotues = require('./profile-routes');

router.use('/profile', profileRotues);

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;






//might need to rename homeroutes