// let routes = require('./routes');
let apis = require('./apis');

module.exports = (app) => {
  app.use('/', apis);
  app.use('/api', apis)
}

//light up in git