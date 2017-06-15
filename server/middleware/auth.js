const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log('middleware', req.method, res.method);
  models.Users.get({'username': req.body['username']})
    .then(function(data) {
      models.Sessions.create(data.id);
next();
    });
  
  
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.checkUser = (req, res, next) => {
  console.log('this should be called first');
  models.Users.get({'username': req.body['username']})
  .then(function(data) {
    if (data === undefined) {
      res.redirect('/login');
    } else {
      var status = models.Users.compare(req.body['password'], data['password'], data['salt']);
      if (status) {
        next();
        res.redirect('/');
      } else { 
        res.redirect('/login'); 
      }
    }
  });
};