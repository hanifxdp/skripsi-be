const { Router } = require("express");
const { getAdmin } = require("../controllers/Admin.js");
const {
  getBudaya,
  createBudaya,
  updateBudaya,
  deleteBudaya,
} = require("../controllers/Budaya.js");

const router = Router();

router
  .get("/budaya", getBudaya)
  .get("/admin", getAdmin)
  .post("/budaya", createBudaya)
  .put("/budaya/:id", updateBudaya)
  .delete("/budaya/:id", deleteBudaya);

module.exports = router;
