"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //設定欄位屬性
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      avatar: DataTypes.STRING,
      introduction: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    //設定model 關聯
    //關聯一 | User - tweet | 一對多關係
    User.hasMany(models.Tweet);
  };
  return User;
};
