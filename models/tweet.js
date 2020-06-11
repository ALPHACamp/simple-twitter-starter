'use strict'
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define(
    'Tweet',
    {
      description: DataTypes.TEXT,
      // googleMapName: DataTypes.TEXT,
      // googleMapUrl: Da/taTypes.TEXT,
      UserId: DataTypes.INTEGER
    },
    {}
  )
  Tweet.associate = function (models) {
    Tweet.hasMany(models.Reply)
    Tweet.hasMany(models.Like)
    Tweet.belongsTo(models.User)
  }
  return Tweet
}
