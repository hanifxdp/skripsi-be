
  const { Sequelize } = require("sequelize");
  const { sequelize, ConnectDB } = require("../utils/database");

  const { DataTypes } = Sequelize;

  const Admin = sequelize.define("admin", {
    id_admin: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_admin: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  module.exports = Admin;

