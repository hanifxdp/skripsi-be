const Budaya = require("../models/ListBudaya");
const Provinsi = require("../models/Provinsi");
const getCursorData = require("../helpers/getCursorData");
const parseSequelizeOptions = require("../helpers/parseSequelizeOptions");
const jenisKebudayaan = require("../models/JenisKebudayaan");
const cloudinary = require("../services/cloudinary");
const budayaServices = require("../services/budayaServices");
const response = require("../utils/response");

// get budaya be
exports.getBudayaAll = async (req, res) => {
  try {
    const options = parseSequelizeOptions(req.query);
    options.include = [
      {
        model: jenisKebudayaan,
        attributes: ["nama_jenis"],
      },
      {
        model: Provinsi,
        attributes: ["nama_provinsi"],
      },
    ];
    options.order = [["id", "ASC"]];
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
// get budaya fe
exports.getAll = async function (req, res) {
  try {
    const allData = await Budaya.findAll({
      include: [
        {
          model: jenisKebudayaan,
          attributes: ["nama_jenis"],
        },
        {
          model: Provinsi,
          attributes: ["nama_provinsi"],
        },
      ],
      order: [["id", "ASC"]],
    });
    return res.status(200).json({
      sucess: true,
      data: allData,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

//get budaya by id
exports.getBudayaById = async (req, res) => {
  try {
    const { id } = req.params;
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
          model: Provinsi,
          attributes: ["nama_provinsi"],
        },
        {
          model: jenisKebudayaan,
          attributes: ["nama_jenis"],
        },
      ],
    });
    res.send(budaya);
  } catch (err) {
    console.log(err);
  }
};
// get list budaya
exports.getListBudaya = async (req, res) => {
  try {
    const list = await Budaya.findAll({
      attributes: ["id", "nama_budaya", "image", "video"],
      where: { provinsiId: req.params.id },
      order: [["image", "ASC"]],
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
          model: Provinsi,
          attributes: ["nama_provinsi"],
        },
        {
          model: jenisKebudayaan,
          attributes: ["nama_jenis"],
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
    const budaya = req.body;
    if (req.file) {
      budaya.image = req.file.path;
    }

    console.log(budaya);

    const data = await budayaServices.create(budaya);

    res.json({
      message: "Budaya Berhasil Ditambahkan",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
// Update budaya
exports.updateBudaya = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (req.file) updateData.image = req.file.path;

    const data = await budayaServices.updateById(id, updateData);

    if (!data)
      return res.json({
        message: "Budaya tidak ditemukan",
      });

    return res.json({
      message: "Budaya berhasil diupdate",
      data: updateData,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteBudaya = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await budayaServices.deleteById(id);

    if (!data)
      return response.not_found(res, undefined, "Budaya tidak ditemukan!");

    res.json({
      message: "Budaya Berhasil Dihapus",
    });
  } catch (err) {
    console.log(err);
  }
};
