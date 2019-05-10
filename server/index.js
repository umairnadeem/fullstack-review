const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const model = require('../helpers/github.js');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let user = req.body.term;
  model.getReposByUsername(user, data => db.save(data));
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.find(repos => {
    res.statusCode = 200;
    res.send(repos);
  });
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

