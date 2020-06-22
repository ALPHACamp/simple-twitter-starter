'use strict'
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    'Like',
    {
      UserId: DataTypes.INTEGER,
      TweetId: DataTypes.INTEGER
    },
    {}
  )
  Like.associate = function (models) {
    Like.belongsTo(models.User, { onDelete: 'CASCADE', hooks: true })
    Like.belongsTo(models.Tweet, { onDelete: 'CASCADE', hooks: true })
  }
  return Like
}
