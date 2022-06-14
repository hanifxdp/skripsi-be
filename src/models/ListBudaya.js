const { Sequelize } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");
const Provinsi = require("./provinsi");
const jenisKebudayaan = require("./jenisKebudayaan");

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
    jenisKebudayaanId: {
      type: Sequelize.INTEGER,
      references: {
        model: jenisKebudayaan,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

ListBudaya.belongsTo(Provinsi);
ListBudaya.belongsTo(jenisKebudayaan);

module.exports = ListBudaya;
