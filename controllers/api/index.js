const router = require('express').Router();
const loginRoutes = require('./userRoutes');
const conversationRoutes = require('./conversationRoutes')

router.use('/users', loginRoutes);
router.use('/conversation', conversationRoutes);


module.exports = router;