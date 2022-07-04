const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.login = async function (req, res) {
  try {
    const admin = await Admin.scope("withPassword").findOne({
      where: { username: req.body.username },
    });
    if (admin) {
      const passwordAuth = bcrypt.compareSync(
        req.body.password,
        admin.password
      );
      if (passwordAuth) {
        const token = await jwt.sign(
          { id: admin.id, nama_admin: admin.nama_admin },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        res.cookie("jwt", token, {
          path: "/",
          maxAge: 60 * 60 * 1000,
          httpOnly: false,
          sameSite: "none",
          secure: true,
        });
        return res.status(201).json({
          success: true,
          message: "Login Success",
          data: {
            id: admin.id,
            nama_admin: admin.nama_admin,
            token: token,
          },
        });
      }
      return res.status(401).json({
        success: false,
        message: "username and password didn't match",
      });
    }
    return res.status(401).json({
      success: false,
      message: "username is not registered",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.comparePass = async function (req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);
    return res.status(200).json({
      success: true,
      data: encryptedPassword,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });

  return res.status(200).json({
    success: true,
    message: "Logout Success",
  });
};
