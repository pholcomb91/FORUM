const router = require('express').Router();
const loginRoutes = require('./userRoutes');
const convoRoutes = require('./convoRoutes');
const commRoutes = require('./commentRoutes'); 
router.use('/users', loginRoutes);
router.use('/convo', convoRoutes);
router.use('/comm', commRoutes);
module.exports = router;