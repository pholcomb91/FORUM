const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Conversation extends Model {}

Conversation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'topic',
          key: 'id',
      },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'conversation',
  }
);

module.exports = Conversation;
