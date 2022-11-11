const router = require('express').Router();
const session = require('express-session');
const { Comment, Conversation, Login, Topic } = require('../models');
const Topic = require('./models/Topic');
const withAuth = require('./utils/auth');

<<<<<<< HEAD
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
    const convos = conversations.map((convo) => convo.get({ plain:true }));

    res.render('homepage', {
        convos,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/topics/:id', async (req, res) => {
    try {
        const topicsList = await Topic.findByPk(req.params.id, {
            include
        });
        const topics = topicsList.map((topics) => topics.get({plain: true})
        );
        res.render('topic', {
            topics,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//Not done build the get routes in here.
=======
// router.get('/', async (req, res))
//Not done

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

>>>>>>> d86c5b2cfff016e154efe59a26b89616731f4518
module.exports = router;