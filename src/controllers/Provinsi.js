const Provinsi = require("../models/provinsi");

exports.getProvinsi = async (req, res) => {
  try {
    const provinsi = await Provinsi.findAll();
    res.send(provinsi);
  } catch (err) {
    console.log(err);
  }
};
