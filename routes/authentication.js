const express = require("express");
const controllersecurity = require("../controller/authentication");

const router = express.Router();

router.get("/", controllersecurity.getLogin);
router.get("/register", controllersecurity.getRegister);
router.post(
  "/register",
  express.urlencoded({ extended: true }),
  controllersecurity.postRegister
);
router.get("/dashboard", controllersecurity.getDashboard);

module.exports = router;
