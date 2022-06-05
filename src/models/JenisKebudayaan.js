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
JenisKebudayaan.associate = function (models) {
  JenisKebudayaan.hasMany(models.ListBudaya);
};

module.exports = JenisKebudayaan;
