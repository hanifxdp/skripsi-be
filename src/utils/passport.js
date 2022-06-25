const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      const user = await Admin.scope("withPassword").findOne({
        where: { username },
      });

      if (!user) return cb(null, false);

      const passwordMatch = await bcrypt.compare(password, user.password);
      // console.log(passwordMatch);
      if (!passwordMatch) {
        return cb(null, false);
      }

      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  Admin.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;
