const { Router } = require("express");
const { getAdmin } = require("../controllers/Admin.js");
const { createProvinsi, getProvinsi } = require("../controllers/Provinsi.js");
const {
  getBudaya,
  createBudaya,
  updateBudaya,
  deleteBudaya,
} = require("../controllers/Budaya.js");

const router = Router();

router
  .get("/budaya", getBudaya)
  .post("/budaya/add", createBudaya)
  .put("/budaya/:id", updateBudaya)
  .delete("/budaya/:id", deleteBudaya)

  .post("/provinsi/add", createProvinsi)
  .get("/provinsi/", getProvinsi)

  .get("/admin", getAdmin);
module.exports = router;
