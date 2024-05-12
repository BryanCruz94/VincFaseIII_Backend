const mongoose = require("mongoose");
const config = require("../../config")
const dbConnection = async () => {
  try {
    await mongoose.connect(config.default.mongodbSSEGRI);

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - Hable con el admin");
  }
};

module.exports = {
  dbConnection,
};
  