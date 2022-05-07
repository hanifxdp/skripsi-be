const { Sequelize } = require("sequelize");
const { properties } = require("../config/databaseConfig");
const Provinsi = require("./Provinsi");
const JenisKebudayaan = require("./JenisKebudayaan");

const { DataTypes } = Sequelize;

const ListBudaya = properties.define("listbudaya", {
  id_budaya: {
    type: DataTypes.INTEGER,
    autoIncrementL: true,
    primaryKey: true,
  },
  nama_budaya: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB,
  },
  pencatatan_num: {
    type: DataTypes.INTEGER,
  },
  penetapan_num: {
    type: DataTypes.INTEGER,
  },
  tahun: {
    type: DataTypes.DATE,
  },
  deskripsi: {
    type: DataTypes.TEXT,
  },
  video: {
    type: DataTypes.BYTEA,
  },
  id_provisi: {
    type: DataTypes.STRING,
    references: {
      model: Provinsi,
      key: "id",
    },
  },
  id_jenisbudaya: {
    type: DataTypes.STRING,
    references: {
      model: JenisKebudayaan,
      key: "id",
    },
  },
});

module.exports = ListBudaya;
