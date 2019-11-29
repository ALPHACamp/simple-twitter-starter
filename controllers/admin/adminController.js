const adminController = {
  getTweets: (req, res) => {
    return res.render('admin/tweets')
  },

  getUsers: (req, res) => {
    return res.render('admin/users')
  }
}

module.exports = adminController