const router = require('express').Router();
const session = require('express-session');
const { Comment, Conversation, User, Topic } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
    const conversations = await Conversation.findAll({
        include: [
            {
                model: Topic,
                attributes: ['name'],
            },
            {
                model: Comment,
                attributes: ['body'],
            },
        ],
    });
    const allTopics = await Topic.findAll();
    const topicList = allTopics.map((t) => t.get({ plain:true }));
    const convos = conversations.map((convo) => convo.get({ plain:true }));
    
    res.render('homepage', {
        convos,
        topicList,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/topics/:id', async (req, res) => {
    try {
      const topicData = await Topic.findByPk(req.params.id, {
        include: [
            {
                model: Conversation,
                attributes: ['body', 'user_id'],
            },
        ],
      });
  
      const topic = topicData.get({ plain: true });
  
      res.render('conversation', {
        topic,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/conversation/:id', async (req, res) => {
    try {
      const convoData = await Conversation.findByPk(req.params.id, {
        include: [
            {
                model: Comment,
            },
            {
              model: User,
              attributes: ['username']
            },
        ],
      });
  
      const con = convoData.get({ plain: true });
      console.log(con);
      res.render('idConversation', {
        con,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Conversation,
            },
            {
                model: Comment,
            },
        ],
      });
      
      const user = userData.get({ plain: true });
      const allTopics = await Topic.findAll();
      const topicList = allTopics.map((t) => t.get({ plain:true }));
  
      res.render('profile', {
        user,
        topicList,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;
