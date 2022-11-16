const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.body);

    try {
      const newComm = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComm);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;

  
  