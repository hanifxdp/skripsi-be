const { Router } = require("express");
const {
  getBudaya,
  createBudaya,
  updateBudaya,
  deleteBudaya,
} = require("../controllers/Budaya.js");

const router = Router();

router
  .get("/budaya", getBudaya)
  .post("/budaya", createBudaya)
  .put("/budaya/:id", updateBudaya)
  .delete("/budaya/:id", deleteBudaya);

module.exports = router;
