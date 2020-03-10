const db = require('../models')
const helpers = require('../_helpers')
const Tweet = db.Tweet
const User = db.User

const tweetController = {
  getTweets: (req, res) => {
     Tweet.findAll({
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [User]
    }).then(tweets => {
      const data = tweets.map(tweet => ({
        ...tweet.dataValues,
        description: tweet.dataValues.description.substring(0, 100)
      }))
      User.findAll({
        limit: 10,
        order: [['createdAt', 'DESC']],
        include: [
          {model: User, as: 'Followers'}
        ]
      }).then(users => {
        //整理 users 資料
        users = users.map(user => ({
          ...user.dataValues,
          // 計算追蹤者人數
          followerCount: user.Followers.length,
          // 判斷目前登入使用者是否已追蹤該 User 物件
          isFollowed: req.user.Followings.map(d => d.id).includes(user.id)
        }))
        // 依追蹤者人數排序清單
        users = users.sort((a, b) => b.followerCount - a.followerCount)
        return res.render('tweets', JSON.parse(JSON.stringify({
          tweets: data,
          users: users
        })))
      })
    })
  }
}

module.exports = tweetController
