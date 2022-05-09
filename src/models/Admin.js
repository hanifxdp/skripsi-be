function init() {
  const { Sequelize } = require("sequelize");
  const { sequelize, ConnectDB } = require("../utils/database");

  const { DataType } = Sequelize;

  const Admin = sequelize.define("admin", {
    id_admin: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_admin: {
      type: DataType.STRING,
    },
    username: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
  });

  module.exports = Admin;
}
