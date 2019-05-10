const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.once('open', () => console.log('connected baby!!'));
let repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  description: String,
  user: String,
  user_id: Number,
  forks: Number,
  url: String,
  private: Boolean,
  avatar_url: String,
  updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var extractedData = data.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    user: repo.owner.login,
    user_id: repo.owner.id,
    forks: repo.forks,
    url: repo.html_url,
    private: repo.private,
    avatar_url: repo.avatar_url,
    updated_at: repo.updated_at
  }));
  Repo.create(extractedData);
}

let find = (callback) => {
Repo.find({}).limit(25).sort({ forks: -1}).exec((err, repos) => callback(repos));
}

module.exports = {
  save,
  find
}