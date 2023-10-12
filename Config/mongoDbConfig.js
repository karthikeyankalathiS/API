const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Define the MongoDB connection URI and port
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/Skills";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
