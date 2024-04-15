const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
  });

  mongoose.connection.on("error", (e) => {
    console.error("MONGO DB ERROR: ", e);
  });
  mongoose.connection.once("connected", () => {
    console.log("MONGO DB CONNECTED");
  });
};

module.exports = { connect };
