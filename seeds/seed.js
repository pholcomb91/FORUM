const sequelize = require('../config/connection');
const { Comment, Conversation, Login, Topic } = require('../models');

const commentData = require('./commentData.json');
const conversationData = require('./conversationData.json');
const loginData = require('./loginData.json');
const topicData = require('./topicData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
    });
  }

  for (const conversation of conversationData) {
    await Conversation.create({
      ...conversation,
    });
  }

  for (const login of loginData) {
    await Login.create({
      ...login,
    });
  }

  for (const topic of topicData) {
    await Topic.create({
      ...topic,
    });
  }

  process.exit(0);
};

seedDatabase();