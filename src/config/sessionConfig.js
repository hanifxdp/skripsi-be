const randomString = require("randomstring");

const sessionConfig = (sessionStore) => {
  return {
    store: sessionStore,
    name: "SID",
    secret: randomString.generate({
      length: 14,
      charset: "alphanumeric",
    }),
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "None",
      secure: true,
    },
  };
};

module.exports = sessionConfig;
