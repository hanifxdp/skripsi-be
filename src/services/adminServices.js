const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
const getCursorData = require("../helpers/getCursorData");
const parseSequelizeOptions = require("../helpers/parseSequelizeOptions");

exports.create = async (admin) => {
  let createdAdmin = await Admin.create({
    id: admin.id,
    nama_admin: admin.nama_admin,
    username: admin.username,
    password: admin.password,
    email: admin.email,
  });

  createdAdmin = createdAdmin.toJSON();
  delete createdAdmin.password;

  return createdAdmin;
};

exports.get = async (query) => {
  const options = parseSequelizeOptions(query);

  const admin = await Admin.findAll(options);
  const cursor = await getCursorData(Admin, query);

  const data = {
    edge: admin,
    cursor,
  };

  return data;
};
