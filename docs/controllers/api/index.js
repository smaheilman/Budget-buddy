const router = require('express').Router();

const userRoutes = require('./user-routes');
// const incomeRoutes = require('./income-routes');
const transactionRoutes = require('./transaction-routes');
const budgetRoutes = require('./budget-routes');


//ALL SINGLUAR NO PLURAL

router.use('/user', userRoutes);
// router.use('/income', incomeRoutes);
router.use('/transaction', transactionRoutes);
router.use('/budget', budgetRoutes);

module.exports = router;