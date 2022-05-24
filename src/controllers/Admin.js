const response = require("../utils/response");
const adminServices = require("../services/adminServices");

exports.getAdmin = async (req, res) => {
  try {
    const data = await adminServices.get(req.query);

    return response.success(res, data, "Successfully retrieved admin!");
  } catch (error) {
    console.log(error);

    return response.internal_server_error(
      res,
      undefined,
      "Failed to retrieve admin!"
    );
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const admin = req.body;

    const data = await adminServices.create(admin);

    return response.created(res, data, "Successfully created admin!");
  } catch (error) {
    console.log(error);

    return response.internal_server_error(
      res,
      undefined,
      "Failed to create admin!"
    );
  }
};
