const moment = require('moment')
module.exports = {

  ifCond: function(a, b, options) {
    if (a === b) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  moment: function(a) {
    return moment(a).format('YYYY-MM-D, HH:mm')
  },

  replyCut: function(a) {
    return a.substring(0, 50)
  }
}

