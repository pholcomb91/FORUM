const sequelize = require('../config/connection');
const { Comment, Conversation, User, Topic } = require('../models');

const commentData = require('./commentData.json');
const conversationData = require('./conversationData.json');
const userData = require('./userData.json');
const topicData = require('./topicData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const topic of topicData) {
    await Topic.create({
      ...topic,
    });
  }

  for (const conversation of conversationData) {
    await Conversation.create({
      ...conversation,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
    });
  }

  process.exit(0);
};

seedDatabase();