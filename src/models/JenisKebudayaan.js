const { Sequelize } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");

const { DataTypes } = Sequelize;

const jenisKebudayaan = sequelize.define(
  "jenisKebudayaan",
  {
    nama_jenis: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

jenisKebudayaan.associate = function (models) {
  jenisKebudayaan.hasMany(models.ListBudaya, { constraint: true });
};

module.exports = jenisKebudayaan;
