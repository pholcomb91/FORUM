const router = require('express').Router();
const loginRoutes = require('./userRoutes');

router.use('/users', loginRoutes);

//router.use('/convo', convoRoutes);


module.exports = router;