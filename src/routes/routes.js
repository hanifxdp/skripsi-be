const { Router } = require("express");
const authRoutes = require("./authRoutes");
const budayaController = require("../controllers/Budaya");
const provinsiController = require("../controllers/Provinsi.js");
const adminController = require("../controllers/Admin.js");
const calc = require("../controllers/calc");

const authController = require("../controllers/auth");
const auth = require("../middleware/checkLogin");
const multer = require("multer");
const { getStorage } = require("../services/cloudinary");

const storage = getStorage("budaya");

const upload = multer({ storage });

const router = Router();

router
  .post("/login", authController.login)
  .post("/logout", authController.logout)
  .post("/create-pass", authController.comparePass)

  .get("/budaya", auth.checkLogin, budayaController.getBudayaAll)
  .get("/budaya/all", budayaController.getAll)
  .get("/budaya/:id", budayaController.getBudayaById)
  .get("/budaya/list/:id", budayaController.getListBudaya)
  .get("/budaya/detail/:id", budayaController.getBudayaDetail)
  .post(
    "/budaya/add",
    auth.checkLogin,
    upload.single("image"),
    budayaController.createBudaya
  )
  .patch(
    "/budaya/:id",
    auth.checkLogin,
    upload.single("image"),
    budayaController.updateBudaya
  )
  .delete("/budaya/:id", auth.checkLogin, budayaController.deleteBudaya)

  .get("/provinsi/", provinsiController.getProvinsi)
  .get("/provinsi/hitung", provinsiController.countBudaya)

  .get("/admin", adminController.getAdmin)
  .post("/admin/create", adminController.createAdmin)

  .post("/login", authRoutes)
  .post("/logout", authRoutes)

  .get("/calculation", calc.getCalculation);

module.exports = router;
