const router = require('express').Router();
const { Comment, Conversation, login, topic } = require('../models');
const withAuth = require('../utils/auth');

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

module.exports = router;