const { Sequelize, DataTypes } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");

const Provinsi = sequelize.define(
  "provinsi",
  {
    nama_provinsi: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DECIMAL,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
  },
  { timestamps: false }
);

module.exports = Provinsi;
