'use strict'
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    'Reply',
    {
      UserId: DataTypes.INTEGER,
      TweetId: DataTypes.INTEGER,
      comment: DataTypes.TEXT
    },
    {}
  )
  Reply.associate = function (models) {
    Reply.belongsTo(models.User, { onDelete: 'CASCADE', hooks: true })
    Reply.belongsTo(models.Tweet, { onDelete: 'CASCADE', hooks: true })
  }
  return Reply
}
