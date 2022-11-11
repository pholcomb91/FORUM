const Comment = require('./Comment');
const Conversation = require('./Conversation');
const Login = require('./Login');
const Topic = require('./Topic');

Conversation.hasMany(Comment, {
    foreignKey: 'conversation_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Conversation, {
    foreignKey: 'conversation_id',
});

Topic.hasMany(Conversation, {
    foreignKey: 'topic_id',
    onDelete: 'CASCADE',
});

Conversation.belongsTo(Topic, {
    foreignKey: 'topic_id',
});

module.exports = {Comment, Conversation, Login, Topic};

