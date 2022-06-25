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
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: 'none',
      Secure: true,
    },
  };
};

module.exports = sessionConfig;
