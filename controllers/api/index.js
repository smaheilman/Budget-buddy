const router = require('express').Router();

const userRoutes = require('./user-routes');
<<<<<<< HEAD
const budgetRoutes = require('./budget-routes');

router.use('/users', userRoutes);
=======
// const incomeRoutes = require('./income-routes');
const transactionRoutes = require('./transaction-routes');
const budgetRoutes = require('./budget-routes');


//ALL SINGLUAR NO PLURAL

router.use('/user', userRoutes);
// router.use('/income', incomeRoutes);
router.use('/transaction', transactionRoutes);
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
router.use('/budget', budgetRoutes);

module.exports = router;