const Admin = require("../models/Admin");
exports.getAdmin = async (req, res) => {
  try {
    const budaya = await Admin.findAll();
    res.send(budaya);
  } catch (err) {
    console.log(err);
  }
};
