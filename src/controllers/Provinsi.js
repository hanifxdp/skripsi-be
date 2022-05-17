const Provinsi = require("../models/Provinsi");

exports.createProvinsi = async (req, res) => {
  try {
    await Provinsi.create(req.body);
    res.json({
      message: "Provinsi Berhasil Ditambahkan",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProvinsi = async (req, res) => {
  try {
    const provinsi = await Provinsi.findAll();
    res.send(provinsi);
  } catch (err) {
    console.log(err);
  }
};
