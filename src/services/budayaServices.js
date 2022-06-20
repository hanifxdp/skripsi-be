const Budaya = require("../models/ListBudaya");
const { deleteCloudPicture } = require("../services/cloudinary");

exports.create = async (budaya) => {
  const result = await Budaya.create({
    id: budaya.id,
    nama_budaya: budaya.nama_budaya,
    deskripsi: budaya.deskripsi,
    tahun: budaya.tahun,
    image: budaya.image,
    video: budaya.video,
    registNum: budaya.registNum,
    provinsiId: budaya.provinsiId,
    jenisKebudayaanId: budaya.jenisKebudayaanId,
  });

  return result;
};

exports.deleteById = async (id) => {
  const budaya = await Budaya.findByPk(id);

  if (!budaya) return null;

  if (budaya.image) deleteCloudPicture(budaya.image);

  await budaya.destroy();

  return true;
};
