const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  const user = new User({ username, password });

  user.save((err, newUser) => {
    if (err) {
      return res.send(err); 
    }
    res.status(201).json(newUser);
  });
};

module.exports = {
  createUser
};
