const { Router } = require("express");
const authRoutes = require("./authRoutes");
const { getAdmin, createAdmin } = require("../controllers/Admin.js");
const { getProvinsi, countBudaya } = require("../controllers/Provinsi.js");
const {
  getBudayaAll,
  createBudaya,
  updateBudaya,
  deleteBudaya,
  getBudayaById,
  getListBudaya,
  getBudayaDetail,
  getAll,
} = require("../controllers/Budaya.js");
const { getCalculation } = require("../controllers/calc");
const checkLogin = require("../middleware/checkLogin");

const router = Router();

router
  .get("/budaya", checkLogin, getBudayaAll)
  .get("/budaya/all", getAll)
  .get("/budaya/:id", getBudayaById)
  .get("/budaya/list/:id", getListBudaya)
  .get("/budaya/detail/:id", getBudayaDetail)
  .post("/budaya/add", checkLogin, createBudaya)
  .patch("/budaya/:id", checkLogin, updateBudaya)
  .delete("/budaya/:id", checkLogin, deleteBudaya)

  .get("/provinsi/", getProvinsi)
  .get("/provinsi/hitung", countBudaya)

  .get("/admin", getAdmin)
  .post("/admin/create", createAdmin)

  .post("/login", authRoutes)
  .post("/logout", authRoutes)

  .get("/calculation", getCalculation);

module.exports = router;
