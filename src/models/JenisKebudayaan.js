const { Sequelize } = require("sequelize");
const { properties } = require("../config/databaseConfig");

const { DataTypes } = Sequelize;

const JenisKebudayaan = properties.define("JenisKebudayaan", {
  id_jenisBudaya: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_jenis: {
    type: DataTypes.STRING,
  },
});

module.export = JenisKebudayaan;
