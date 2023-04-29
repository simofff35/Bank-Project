const passport = require("passport");
const User = require("./../database/mongoose");

exports.getLogin = (req, res, next) => {
  res.render("login", { title: "Login" });
};

exports.getRegister = (req, res, next) => {
  res.render("register", { title: "login" });
};

exports.postRegister = (req, res, next) => {
  // const user = new User({
  //   name: req.body.firstName + req.body.lastName,
  //   adresse: req.body.adresse,
  //   email: req.body.email,
  //   password: req.body.password,
  // });
  // user
  //   .save()
  //   .then((found) => {
  //     console.log(found);
  //     res.render("dashboard", { title: "Dashboard" });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  User.register(
    { username: req.body.email },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/");
        });
      }
    }
  );
};

exports.getDashboard = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render("dashboard", { title: "Dashboard" });
  } else {
    console.log("hello worldd");
    res.redirect("/");
  }
};
