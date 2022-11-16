const router = require('express').Router();
const { Topic } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {

    const newTopic = await Topic.create({
      ...req.body,
    });
    console.log(req.body);
    res.status(200).json(newTopic);
    console.log(newTopic)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;