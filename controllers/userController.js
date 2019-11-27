const bcrypt = require('bcrypt-nodejs');
const db = require('../models');
const User = db.User;
const Tweet = db.Tweet;

const userController = {
  // 登錄頁面VIEW
  signUpPage: (req, res) => {
    return res.render('signup');
  },
  // 登錄頁面POST請求
  signUp: async (req, res) => {
    if (!req.body.name) {
      req.flash('error_messages', '請填入使用者名稱！');
      return res.redirect('/signup');
    }
    if (!req.body.email) {
      req.flash('error_messages', '請填入信箱！');
      return res.redirect('/signup');
    }
    if (!req.body.password || !req.body.passwordCheck) {
      req.flash('error_messages', '請填入密碼或認證密碼！');
      return res.redirect('/signup');
    }
    if (req.body.password.length < 8) {
      req.flash('error_messages', '密碼強度太弱，密碼長度需大等於8字元！');
      return res.redirect('/signup');
    }
    if (req.body.passwordCheck !== req.body.password) {
      req.flash('error_messages', '兩次密碼輸入不同！');
      return res.redirect('/signup');
    }
    // 確認使用者名稱有沒有被使用過
    const isName = await User.findOne({
      where: { name: req.body.name }
    }).then(name => {
      return name;
    });

    User.findOne({ where: { email: req.body.email } }).then(user => {
      if (user) {
        req.flash('error_messages', '信箱重複！');
        return res.redirect('/signup');
      }
      if (isName) {
        req.flash('error_messages', '使用者名稱重複！');
        return res.redirect('/signup');
      }
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(
          req.body.password,
          bcrypt.genSaltSync(10),
          null
        )
      }).then(() => {
        req.flash('success_messages', '成功註冊帳號！');
        return res.redirect('/signin');
      });
    });
  },

  signInPage: (req, res) => {
    return res.render('signin');
  },

  signIn: async (req, res) => {
    req.flash('success_messages', '成功登入!');
    req.user.dataValues.isAdmin
      ? res.redirect('/admin/tweets')
      : res.redirect('/tweets');
  },

  logout: (req, res) => {
    req.flash('success_messages', '登出成功！');
    req.logout();
    res.redirect('/signin');
  },

  getUser: (req, res) => {
    let isCurrentUser;
    return User.findByPk(req.params.id).then(user => {
      if (req.params.id) {
        Tweet.findAll().then(tweets => {
          let userTweets = [];
          // filtering the equivalent user
          tweets.map(tweet => {
            if (tweet.dataValues.UserId === Number(req.params.id)) {
              userTweets.push(tweet.dataValues);
            }
          });
          // check if is Current User
          if (req.user) {
            req.user.id === Number(req.params.id)
              ? (isCurrentUser = true)
              : (isCurrentUser = false);
          }
          // sort with Date
          userTweets = userTweets.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

          return res.render('dashboard', { user, userTweets, isCurrentUser });
        });
      }
    });
  }
};

module.exports = userController;
