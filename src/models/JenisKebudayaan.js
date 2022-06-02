const { Sequelize } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");

const { DataTypes } = Sequelize;

const JenisKebudayaan = sequelize.define(
  "JenisKebudayaan",
  {
    nama_jenis: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = JenisKebudayaan;
