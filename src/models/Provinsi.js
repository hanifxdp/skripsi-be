const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/databaseConfig");

const { DataTypes } = Sequelize;

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
