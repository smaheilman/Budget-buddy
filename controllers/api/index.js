const router = require('express').Router();

const userRoutes = require('./user-routes');
const budgetRoutes = require('./budget-routes');

router.use('/users', userRoutes);
router.use('/budget', budgetRoutes);

module.exports = router;