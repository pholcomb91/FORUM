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
const Topic = require('./Topic');
const User = require('./User');

Topic.hasMany(Conversation, {
    foreignKey: 'topic_id'
});

Conversation.belongsTo(Topic);

Conversation.hasMany(Comment, {
    foreignKey: 'conversation_id'
});

Comment.belongsTo(Conversation);

User.hasMany(Conversation, {
    foreignKey: 'user_id'
});

Conversation.belongsTo(User);

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User);

module.exports = { Comment, Conversation, Topic, User };


