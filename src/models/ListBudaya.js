
  const { Sequelize } = require("sequelize");
  const { sequelize, ConnectDB } = require("../utils/database");
  const Provinsi = require("./Provinsi");
  const JenisKebudayaan = require("./JenisKebudayaan");

  const { DataTypes } = Sequelize;

  const ListBudaya = sequelize.define("listbudaya", {
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
    },
    id_provinsi: {
      type: DataTypes.INTEGER,
      references: {
        model: Provinsi,
        key: "id_provinsi",
      },
    },
    id_jenisBudaya: {
      type: DataTypes.INTEGER,
      references: {
        model: JenisKebudayaan,
        key: "id_jenisBudaya",
      },
    },
  });

  module.exports = ListBudaya;

