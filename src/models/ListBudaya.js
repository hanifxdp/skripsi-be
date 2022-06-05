const { Sequelize } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");
const Provinsi = require("./provinsi");
const JenisKebudayaan = require("./jenisKebudayaan");

const { DataTypes } = Sequelize;

const ListBudaya = sequelize.define(
  "listbudaya",
  {
    nama_budaya: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    registNum: {
      type: DataTypes.INTEGER,
    },
    tahun: {
      type: DataTypes.INTEGER,
    },
    deskripsi: {
      type: DataTypes.TEXT,
    },
    video: {
      type: DataTypes.STRING,
    },
    provinsiId: {
      type: Sequelize.INTEGER,
      references: {
        model: Provinsi,
        key: "id",
      },
    },
    jenisId: {
      type: Sequelize.INTEGER,
      references: {
        model: JenisKebudayaan,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

ListBudaya.associate = function (models) {
  ListBudaya.belongsTo(models.JenisKebudayaan, {
    foreignKey: "id",
    as: "jenisId",
  });
  ListBudaya.belongsTo(models.Provinsi, {
    foreignKey: "id",
    as: "provinsiId",
  });
};

module.exports = ListBudaya;
