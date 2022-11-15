const router = require('express').Router();
const loginRoutes = require('./userRoutes');
const conversationRoutes = require('./conversationRoutes')
const commRoutes = require('./commentRoutes'); 

router.use('/users', loginRoutes);
router.use('/conversation', conversationRoutes);
router.use('/comm', commRoutes);

module.exports = router;