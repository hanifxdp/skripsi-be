const Budaya = require("../models/ListBudaya");

// get budaya
exports.getBudaya = async (req, res) => {
  try {
    const budaya = await Budaya.findAll();
    res.send(budaya);
  } catch (err) {
    console.log(err);
  }
};
// add budaya
exports.createBudaya = async (req, res) => {
  try {
    await Budaya.create(req.body);
    res.json({
      message: "Budaya Berhasil Ditambahkan",
    });
  } catch (err) {
    console.log(err);
  }
};
// Update budaya
exports.updateBudaya = async (req, res) => {
  try {
    await Budaya.update(req.body, {
      where: {
        id_budaya: req.params.id,
      },
    });
    res.json({
      message: "Budaya Berhasil Diupdate",
    });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteBudaya = async (req, res) => {
  try {
    await Budaya.destroy({
      where: {
        id_budaya: req.params.id,
      },
    });
    res.json({
      message: "Budaya Berhasil Dihapus",
    });
  } catch (err) {
    console.log(err);
  }
};
