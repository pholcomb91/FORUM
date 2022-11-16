const router = require('express').Router();
const loginRoutes = require('./userRoutes');
const conversationRoutes = require('./conversationRoutes')
const commRoutes = require('./commentRoutes'); 
const newTopic = require('./topicRoutes');

router.use('/users', loginRoutes);
router.use('/conversation', conversationRoutes);
router.use('/comm', commRoutes);
router.use('/newtopic', newTopic);

module.exports = router;