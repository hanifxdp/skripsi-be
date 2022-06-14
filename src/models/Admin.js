const { Sequelize } = require("sequelize");
const { sequelize, ConnectDB } = require("../utils/database");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const { DataTypes } = Sequelize;

const Admin = sequelize.define(
  "admin",
  {
    nama_admin: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  }
);

// Admin.addScope("withPassword", {
//   withPassword: {
//     attributes: { include: ["password"] },
//   },
// });
Admin.beforeCreate(async (admin) => {
  const hashedPassword = await hashPassword(admin.password);
  admin.password = hashedPassword;
});

Admin.beforeUpdate(async (admin) => {
  if (user.password) {
    const hashedPassword = await hashPassword(admin.password);
    admin.password = hashedPassword;
  }
});

module.exports = Admin;
