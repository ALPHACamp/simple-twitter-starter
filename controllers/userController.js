const bcrypt = require("bcrypt-nodejs")
const db = require("../models")
const User = db.User
const Reply = db.Reply
const Tweet = db.Tweet
const Like = db.Like

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },

  signUp: (req, res) => {
    if (req.body.password !== req.body.passwordCheck) {
      req.flash("error_messages", "兩次密碼輸入不相同")
      return res.redirect("/signup")
    } else {
      User
        .findOne({ where: { email: req.body.email } })
        .then((user) => {
          if (user) {
            req.flash("error_messages", "信箱已經被註冊過")
            return res.redirect("/signup")
          } else {
            User.create({
              name: req.body.name,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
            }).then(user => {
              req.flash("success_messages", "成功註冊！！")
              return res.redirect('/signin')
            })
          }
        })
    }
  },

  signInPage: (req, res) => {
    res.render("signin")
  },

  signIn: (req, res) => {
    req.flash("success_messages", "成功登入")
    res.redirect("/tweets")
  },

  logout: (req, res) => {
    req.flash("success_messages", "已經成功登出")
    req.logout()
    res.redirect("/signin")
  },

  getUserTweets: (req, res) => {
    User
      .findByPk(req.params.id, {
        include: [
          { model: Like, include: [Tweet] },
          { model: Tweet, include: [Reply, Like, User] },
          { model: User, as: "followerId" },
          { model: User, as: "followingId" }
        ]
      })
      .then((User) => {
        console.log(User.Tweets)
        res.render("userTweets", { User, Tweets: User.Tweets })
      })

  }
}

module.exports = userController