const { Router } = require("express");
const authRoutes = require("./authRoutes");
const { getAdmin, createAdmin } = require("../controllers/Admin.js");
const { getProvinsi } = require("../controllers/Provinsi.js");
const {
  getBudayaAll,
  createBudaya,
  updateBudaya,
  deleteBudaya,
  getBudayaById,
  getListBudaya,
  getBudayaDetail,
} = require("../controllers/Budaya.js");

const router = Router();

router
  .get("/budaya", getBudayaAll)
  .get("/budaya/:id", getBudayaById)
  .get("/budaya/list/:id", getListBudaya)
  .get("/budaya/detail/:id", getBudayaDetail)
  .post("/budaya/add", createBudaya)
  .patch("/budaya/:id", updateBudaya)
  .delete("/budaya/:id", deleteBudaya)

  .get("/provinsi/", getProvinsi)

  .get("/admin", getAdmin)
  .post("/admin/create", createAdmin)

  .post("/login", authRoutes)
  .post("/logout", authRoutes);

module.exports = router;
