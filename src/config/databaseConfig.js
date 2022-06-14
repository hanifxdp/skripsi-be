module.exports = {
  development: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "frnnylorxxpwgz",
    password:
      "c3952c0d04c02bf743e4123c80b2090bb0591cd6b2e2eae0b6d898e68329987e",
    database: "d18onl6tmrk39u",
    host: "ec2-52-22-136-117.compute-1.amazonaws.com",
    dialect: "postgres",
  },
};
