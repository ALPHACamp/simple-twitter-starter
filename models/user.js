"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //設定欄位屬性
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      introduction: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {}
  );
  User.associate = function (models) {
    //設定model 關聯
    //關聯一 | User - tweet | 一對多關係
    User.hasMany(models.Tweet, { as: "UserTweets" });
    //關聯一 | User - Reply| 一對多關係
    User.hasMany(models.Reply);
    //關聯二 | User-User | 多對多
    //固定 followingId -  抓出追隨者
    User.belongsToMany(models.User, {
      through: models.Followship,
      foreignKey: "followingId",
      as: "Followers"
    });
    //固定 followerId - 抓出 已追蹤的人
    User.belongsToMany(models.User, {
      through: models.Followship,
      foreignKey: "followerId",
      as: "Followings"
    });
    //關聯三 | User-tweet Like | 多對多
    User.belongsToMany(models.Tweet, {
      through: models.Like,
      foreignKey: "UserId",
      as: "LikedTweets"
    });
    //關聯四 | user hasmany like
    User.hasMany(models.Like);
  };
  return User;
};
