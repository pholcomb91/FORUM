const router = require('express').Router();
const { Conversation, Comment, Topic, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newConversation = await Conversation.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newConversation);
    console.log(newConversation)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;