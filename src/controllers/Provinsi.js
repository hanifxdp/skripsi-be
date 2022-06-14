const Provinsi = require("../models/provinsi");
const Budaya = require("../models/listBudaya");
const sequelize = require("sequelize");

exports.getProvinsi = async (req, res) => {
  try {
    const provinsi = await Budaya.findAll({
      attributes: [[sequelize.fn("count", "*"), "totalBudaya"], "provinsiId"],
      include: [
        {
          model: Provinsi,
        },
      ],
      group: ["provinsi.id", "provinsiId"],
      order: [["provinsiId", "ASC"]],
    });
    res.send(provinsi);
  } catch (err) {
    console.log(err);
  }
};
module.exports.countBudaya = async function (req, res) {
  try {
    const budaya = await Budaya.findAll({
      attributes: [[sequelize.fn("count", "*"), "totalBudaya"], "provinsiId"],
      include: [
        {
          model: Provinsi,
        },
      ],
      group: ["provinsi.id", "provinsiId"],
      order: [["provinsiId", "ASC"]],
    });

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
