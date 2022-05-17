const Admin = require("../models/Admin");

exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll();
    res.send(admin);
  } catch (err) {
    console.log(err);
  }
};


