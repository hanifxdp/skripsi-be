const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      const admin = await Admin.scope("withPassword").findOne({
        where: { username },
      });

      if (!admin) return cb(null, false);

      const passwordMatch = await bcrypt.compare(password, admin.password);
      // console.log(passwordMatch);
      if (!passwordMatch) {
        return cb(null, false);
      }

      return cb(null, admin);
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser(function (admin, done) {
  done(null, admin.id);
});

passport.deserializeUser(function (id, done) {
  Admin.findById(id, function (err, admin) {
    done(err, admin);
  });
});

module.exports = passport;
