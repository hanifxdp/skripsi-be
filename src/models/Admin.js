const { Sequelize } = require("sequelize");
const { properties } = require("../config/database");

const { DataType } = Sequelize;

const Admin = properties.define("admin", {
  id_admin: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_admin: {
    type: DataType.STRING,
  },
  username: {
    type: DataType.STRING,
    allowNull: false,
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
});

export default Admin;
