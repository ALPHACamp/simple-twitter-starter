const db = require("../models");
const Tweet = db.Tweet;
const User = db.User;
const Reply = db.Reply;
const Like = db.Like;

const tweetController = {
  getTweets: (req, res) => {
    User.findAll({
      include: [{ model: User, as: "Followers" }]
    }).then(users => {
      users.sort((a, b) =>
        a.Followers.length > b.Followers.length
          ? -1
          : b.Followers.length > a.Followers.length
          ? 1
          : 0
      );
      let top_ten_users = users.slice(0, 10);
      Tweet.findAndCountAll({
        include: [User, Reply, Like],
        order: [["updatedAt", "DESC"]]
      }).then(result => {
        res.render("tweets", {
          tweets: result.rows,
          top_ten_users
        });
      });
    });
  },
  postTweets: (req, res) => {
    if (!req.body.tweettext) {
      req.flash("error_messages", "there's no text input");
      res.redirect("back");
    } else {
      return Tweet.create({
        description: req.body.tweettext,
        UserId: req.user.id
      }).then(user => {
        res.redirect("/tweets");
      });
    }
  }
};

module.exports = tweetController;
