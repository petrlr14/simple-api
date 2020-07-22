const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  username: String,
});

module.exports = model("User", userSchema);
