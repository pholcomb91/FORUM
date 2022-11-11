const Comment = require('./Comment');
const Conversation = require('./Conversation');
const User = require('./User');
const Topic = require('./Topic');

Conversation.hasMany(Comment, {
    foreignKey: 'conversation_id',
});

Comment.belongsTo(Conversation, {
    foreignKey: 'conversation_id',
});

Topic.hasMany(Conversation, {
    foreignKey: 'topic_id',
});

Conversation.belongsTo(Topic, {
    foreignKey: 'topic_id',
});

User.hasMany(Conversation, {
    foreignKey: 'user_id'
});

Conversation.belongsTo(User);

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User);


module.exports = {Comment, Conversation, User, Topic};


