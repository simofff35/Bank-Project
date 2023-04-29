const express = require("express");
const authenController = require("./routes/authentication");
const ejs = require("ejs");
const passport = require("passport");
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  session({
    secret: "secret code",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(authenController);

app.use("", (req, res, next) => {
  res.send("page not found");
});

const port = 3000;
app.listen(port, () => {
  //   console.log(`app listenning on port ${port}`);
});
