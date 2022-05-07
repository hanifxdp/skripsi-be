const { Sequelize } = require("sequelize");
const DB = require("../config/databaseConfig");

const sequelize = new Sequelize(DB.name, DB.username, DB.password, {
  dialect: DB.dialect,
  host: DB.host,
  port: DB.port,
  logging: false,
});

const connectDB = async () => {
  try {
    // await sequelize.sync({ force: true })
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  sequelize,
  connectDB,
};
