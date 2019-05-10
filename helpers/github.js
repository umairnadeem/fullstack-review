const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${user}/repos?per_page=100`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      callback(data);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;