const { Sequelize } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");

const { DataTypes } = Sequelize;

const JenisKebudayaan = sequelize.define(
  "JenisKebudayaan",
  {
    id_jenisBudaya: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_jenis: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = JenisKebudayaan;
