const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected succssfully ......");
  } catch (error) {
    console.log(error.message);
    console.log("Error in the connection with the database");
  }
};
