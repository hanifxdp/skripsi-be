const math = require("mathjs");
const Budaya = require("../models/ListBudaya");
const Provinsi = require("../models/Provinsi");
const sequelize = require("sequelize");

module.exports.getCalculation = async function (req, res) {
  try {
    const budaya = await Budaya.findAll();
    const provinsi = await Provinsi.findAll();
    const budayaGroup = await Budaya.findAll({
      attributes: [[sequelize.fn("count", "*"), "totalBudaya"]],
      include: [
        {
          model: Provinsi,
        },
      ],
      group: ["provinsi.id"],
    });

    let arrayTotal = [];
    budayaGroup.forEach((item) => {
      arrayTotal.push(parseInt(item.dataValues.totalBudaya));
    });

    const stdev = math.std(arrayTotal);

    const totalBudaya = budaya.length;
    const totalProvinsi = provinsi.length;
    const average = totalBudaya / totalProvinsi;

    let n = 0.1;

    if (req.query.nilaiAcuan) {
      n = req.query.nilaiAcuan;
    }

    const low = average - n * stdev;
    const high = average + n * stdev;

    const dataCalculate = {
      total: totalBudaya,
      totalProvinsi,
      average,
      stdev,
      low,
      high,
      n,
    };
    return res.status(200).json({
      success: true,
      message: "success",
      data: dataCalculate,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};
