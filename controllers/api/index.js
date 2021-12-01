const router = require('express').Router();

const userRoutes = require('./user-routes');
// const incomeRoutes = require('./income-routes');
const transactionRoutes = require('./transaction-routes');
const budgetRoutes = require('./budget-routes');
const categoryRoutes = require('./category-routes')


//ALL SINGLUAR NO PLURAL

router.use('/user', userRoutes);
// router.use('/income', incomeRoutes);
router.use('/transaction', transactionRoutes);
router.use('/budget', budgetRoutes);
router.use('/categorie', categoryRoutes);

module.exports = router;