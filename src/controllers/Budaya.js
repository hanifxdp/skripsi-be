const Budaya = require("../models/listBudaya");
const Provinsi = require("../models/provinsi");
const getCursorData = require("../helpers/getCursorData");
const parseSequelizeOptions = require("../helpers/parseSequelizeOptions");
const JenisKebudayaan = require("../models/jenisKebudayaan");

// get budaya
exports.getBudayaAll = async (req, res) => {
  try {
    const options = parseSequelizeOptions(req.query);

    const budaya = await Budaya.findAll(options);

    const cursor = await getCursorData(Budaya, req.query);

    const data = {
      edge: budaya,
      cursor,
    };
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
//get budaya by id
exports.getBudayaById = async (req, res) => {
  try {
    const { id } = req.params;
    const budaya = await Budaya.findByPk(id);
    res.send(budaya);
  } catch (err) {
    console.log(err);
  }
};
// get list budaya
exports.getListBudaya = async (req, res) => {
  try {
    const list = await Budaya.findAll({
      attributes: ["id", "nama_budaya"],
      where: { provinsiId: req.params.id },
    });
    if (!list) {
      return res.status(400).json({
        success: false,
        message: "Budaya not found.",
      });
    }
    return res.status(200).json({
      sucess: true,
      data: list,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};
// get detail budaya
module.exports.getBudayaDetail = async function (req, res) {
  try {
    const budaya = await Budaya.findByPk(req.params.id, {
      attributes: [
        "id",
        "nama_budaya",
        "image",
        "registNum",
        "tahun",
        "deskripsi",
        "video",
      ],
      include: [
        {
          model: JenisKebudayaan,
          attributes: ["nama_jenis"],
        },
        {
          model: Provinsi,
          attributes: ["nama_provinsi"],
        },
      ],
    });
    if (!budaya) {
      return res.status(404).json({
        success: false,
        message: "Budaya not found",
      });
    }
    return res.status(200).json({
      sucess: true,
      data: budaya,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
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
        id: req.params.id,
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
        id: req.params.id,
      },
    });
    res.json({
      message: "Budaya Berhasil Dihapus",
    });
  } catch (err) {
    console.log(err);
  }
};
