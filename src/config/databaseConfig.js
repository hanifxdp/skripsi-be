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
    username: "qolznvqdilfrsd",
    password:
      "161453cf231c106d06924eeecf6106287a294d97c457792c022f1ef79e660807",
    database: "d6dkjfiq6nd3ub",
    host: "ec2-52-72-56-59.compute-1.amazonaws.com",
    dialect: "postgres",
  },
};
