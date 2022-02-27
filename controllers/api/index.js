const router = require('express').Router();

const userRoutes = require('./user-routes');
const throughtRoutes = require('./thought-routes');

router.use('/user', userRoutes);
router.use('/thoughts', throughtRoutes);


module.exports = router; 