const mongoose = require("mongoose");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    email: {
      type: String,
      unique: true,
    },
    password: String,
  })
);

module.exports = User;
