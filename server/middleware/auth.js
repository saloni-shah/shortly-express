const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log('middleware', req.method, res.method);
  models.Users.get({'username': req.body['username']})
    .then(function(data) {
      models.Sessions.create(data.id);
    });
  
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

