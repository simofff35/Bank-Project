const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const passport = require("passport");

mongoose.connect("mongodb://127.0.0.1:27017/bankdb");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  adresse: String,
  email: {
    type: String,
    required: [true, "Please provide your email adresse"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  gender: String,
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
module.exports = User;
