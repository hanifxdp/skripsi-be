function init() {
  const { Sequelize, DataTypes } = require("sequelize");
  const { sequelize, ConnectDB } = require("../utils/database");

  const Provinsi = sequelize.define("provinsi", {
    id_provinsi: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_provinsi: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.INTEGER,
    },
    longtitude: {
      type: DataTypes.INTEGER,
    },
  });

  module.exports = Provinsi;
}
