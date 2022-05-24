const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
const getCursorData = require("../helpers/getCursorData");
const parseSequelizeOptions = require("../helpers/parseSequelizeOptions");

exports.create = async (admin) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(admin.password, salt);

  let createdAdmin = await Admin.create({
    id_admin: admin.id_admin,
    nama_admin: admin.nama_admin,
    username: admin.username,
    password: hashedPassword,
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
