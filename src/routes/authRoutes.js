const { Router } = require("express");
const passport = require("../utils/passport");
const response = require("../utils/response");
const Admin = require("../models/admin");

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", { failureMessage: true }),
  (req, res) => {
    const data = {
      id: req.user.id,
      username: req.user.username,
      name: req.user.nama_admin,
    };

    return response.success(res, data, "Log In success");
  }
);

router.post("/logout", (req, res) => {
  req.logout();

  return response.success(res, undefined, "Log out success!");
});

module.exports = router;
