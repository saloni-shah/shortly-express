const models = require('../models');

const parseCookies = (req, res, next) => {
  
  
};




const createCookies = (req, res, next) => {

  models.Users.get({'username': req.body['username']})
    .then(function(data) {
      console.log('calling from cookies', data);
      models.Sessions.get({'userId': data['userId']});
    // res.cookie(Cookie, )
    });

  
};
module.exports = parseCookies;
module.exports.createCookies = createCookies;