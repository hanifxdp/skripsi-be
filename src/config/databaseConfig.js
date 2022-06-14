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
    user: "oubyotqrxbvonk",
    password:
      "c1ef41851f5b1469792825d49eed08d5bc1705a00421dde676095eb2e6babeab",
    database: "d6uims88ph6d2",
    host: "ec2-52-22-136-117.compute-1.amazonaws.com",
    dialect: "postgres",
  },
};
